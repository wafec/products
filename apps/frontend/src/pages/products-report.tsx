import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { productsApi } from "../services/apis";
import { ProductReportModel } from "../models/product";
import { BreadcrumbHome } from "../components/breadcrumb-home";

export default function ProductsReport() {
    const [productsReport, setProductsReport]: [ProductReportModel[], any] = useState([])
    const [startDate, setStartDate] = useState("2025-01-01")
    const [endDate, setEndDate] = useState("2025-12-31")

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