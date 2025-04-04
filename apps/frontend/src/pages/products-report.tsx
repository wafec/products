import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { productsApi } from "../services/apis";
import { ProductReport } from "../models/product";

export default function ProductsReport() {
    const [productsReport, setProductsReport]: [ProductReport[], any] = useState([])

    useEffect(() => {
        productsApi.getReport().then((report) => {
            setProductsReport(report)
        })
    }, [])

    return (
        <Box sx={{padding:2}} >
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
                                <TableRow key={productReport.product.id}>
                                    <TableCell>{productReport.product.name}</TableCell>
                                    <TableCell>{productReport.product.id}</TableCell>
                                    <TableCell>{productReport.entries}</TableCell>
                                    <TableCell>{productReport.exits}</TableCell>
                                    <TableCell>{productReport.balance}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}