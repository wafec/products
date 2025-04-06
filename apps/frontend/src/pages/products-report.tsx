import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { productsApi } from "../services/apis";
import { ProductReportModel } from "../models/product";
import { BreadcrumbHome } from "../components/breadcrumb-home";

function dateToString(thisDate: Date): string {
    var dd = String(thisDate.getDate()).padStart(2, '0');
    var mm = String(thisDate.getMonth() + 1).padStart(2, '0');
    var yyyy = thisDate.getFullYear();
    
    return yyyy + '-' + mm + '-' + dd; 
}

export default function ProductsReport() {
    const startDateObj = new Date();
    startDateObj.setDate(startDateObj.getDate() - (365 * 2));

    const [productsReport, setProductsReport]: [ProductReportModel[], any] = useState([])
    const [startDate, setStartDate] = useState(dateToString(startDateObj))
    const [endDate, setEndDate] = useState(dateToString(new Date()))

    useEffect(() => {
        productsApi.getReport(startDate, endDate).then((report) => {
            setProductsReport(report)
        })
    }, [])

    const handleStartDateChange = (event: any) => {
        setStartDate(event.target.value)
    }

    const handleEndDateChange = (event: any) => {
        setEndDate(event.target.value)
    }

    const handleSearchClick = () => {
        productsApi.getReport(startDate, endDate).then((report) => {
            setProductsReport(report)
        })
    }

    return (
        <Box sx={{padding:2}} >
            <Stack spacing={2}>
                <BreadcrumbHome current="Relatório de Produtos" />
                <Stack direction="row" spacing={2}>
                    <TextField id="startDate" type="date" label="Início" variant="outlined" value={startDate} onChange={handleStartDateChange}/>
                    <TextField id="endDate" type="date" value={endDate} onChange={handleEndDateChange}/>
                    <Button variant="contained" onClick={handleSearchClick}>Buscar</Button>
                </Stack>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Código</TableCell>
                                <TableCell>Entradas</TableCell>
                                <TableCell>Saídas</TableCell>
                                <TableCell>Saldo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                productsReport.map((productReport) => (
                                    <TableRow key={productReport.id}>
                                        <TableCell>{productReport.name}</TableCell>
                                        <TableCell>{productReport.id}</TableCell>
                                        <TableCell>{productReport.entries}</TableCell>
                                        <TableCell>{productReport.exits}</TableCell>
                                        <TableCell>{productReport.balance}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Box>
    )
}