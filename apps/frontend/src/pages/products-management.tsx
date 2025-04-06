import { Alert, Box, Button, FormControl, Icon, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { productsApi } from "../services/apis";
import { ProductUpdateModel } from "../models/product";
import { BreadcrumbHome } from "../components/breadcrumb-home";

export default function ProductsManagement() {
    const [actionType, setActionType] = useState("Compra")
    const [id, setId] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [confirmation, setConfirmation] = useState(false);

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
        productsApi.update(new ProductUpdateModel(id, "", quantity), actionType)
            .then(() => {
                setConfirmation(true);
            })
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
                <BreadcrumbHome current="Movimentações" />
                {confirmation && <Alert severity="success">Cadastrado com sucesso</Alert>}
                <TextField id="product-id" label="Código" onChange={handleIdChange} slotProps={{htmlInput:{'data-testid': 'product-id'}}} />
                <FormControl fullWidth>
                    <InputLabel id="product-action-type-label">Tipo</InputLabel>
                    <Select
                        labelId="product-action-type-label"
                        id="product-action-type-select"
                        value={actionType}
                        label="Tipo"
                        onChange={handleActionTypeChange} inputProps={{ 'data-testid': 'action-type' }}>
                            <MenuItem value={"Compra"}>Compra</MenuItem>
                            <MenuItem value={"Venda"}>Venda</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="product-quantity" label="Quantidade" type="number" onChange={handleQuantityChange} slotProps={{htmlInput: {'data-testid': 'quantity'}}} />
                <Button variant="contained" onClick={handleUpdate} {...{"data-testid": "cadastrar"}}>Cadastrar</Button>
            </Stack>
        </Box>
    )
}