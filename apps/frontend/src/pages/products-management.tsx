import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { productsApi } from "../services/apis";
import { Product } from "../models/product";

export default function ProductsManagement() {
    const [actionType, setActionType] = useState("Compra")
    const [id, setId] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleActionTypeChange = (event: any) => {
        setActionType(event.target.value);
    }

    const handleIdChange = (event: any) => {
        setId(event.target.value);
    }

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    }

    const handleUpdate = () => {
        productsApi.update(new Product(id, "", quantity), actionType)
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
                <TextField id="product-id" label="Código" onChange={handleIdChange} />
                <FormControl fullWidth>
                    <InputLabel id="product-action-type-label">Tipo</InputLabel>
                    <Select
                        labelId="product-action-type-label"
                        id="product-action-type-select"
                        value={actionType}
                        label="Tipo"
                        onChange={handleActionTypeChange}>
                            <MenuItem value={"Compra"}>Compra</MenuItem>
                            <MenuItem value={"Venda"}>Venda</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="product-quantity" label="Quantidade" type="number" onChange={handleQuantityChange} />
                <Button variant="contained" onClick={handleUpdate}>Cadastrar</Button>
            </Stack>
        </Box>
    )
}