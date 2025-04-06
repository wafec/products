import { Alert, Box, Button, FormControl, Icon, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { productsApi } from "../services/apis";
import { ProductDetailsModel, ProductUpdateModel } from "../models/product";
import { BreadcrumbHome } from "../components/breadcrumb-home";

export default function ProductsManagement() {
    const [actionType, setActionType] = useState("Compra")
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity]: [number | undefined, any] = useState(0)
    const [confirmation, setConfirmation] = useState(false);
    const [productDetails, setProductDetails]: [productDetails: ProductDetailsModel | undefined, setProductDetails: any] = useState();
    const [quantityError, setQuantityError] = useState(false)
    const [submitEnabled, setSubmitEnabled] = useState(false)

    const cleanUp = () => {
        setId("")
        setName("")
        setQuantity(0)
    }
    
    const checkSubmitEnabled = () => {
        if (id !== "" && name !== ""  && quantity > 0) {
            setSubmitEnabled(true)
        } else {
            setSubmitEnabled(false)
        }
    }

    const handleActionTypeChange = (event: any) => {
        setActionType(event.target.value);
    }

    const handleIdChange = (event: any) => {
        setId(event.target.value);
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    const handleIdOnBlur = (event: any) => {
        productsApi.getProductDetails(event.target.value).then(((pd: any) => {
            setProductDetails(pd)
            setName(pd?.name)
        }))
    };

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    }

    const handleUpdate = () => {
        if (actionType == "Venda") {
            const calc = ((productDetails?.quantity ?? 0) - quantity)
            if (calc < 0) {
                setQuantityError(true)
                return
            }
        }
        productsApi.update(new ProductUpdateModel(id, name, quantity), actionType)
            .then(() => {
                setConfirmation(true);
                setSubmitEnabled(false);
            }).finally(() => {
                cleanUp();
            })
    }

    useEffect(() => {
        checkSubmitEnabled();
    }, [id, name, quantity])

    return (
        <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
                <BreadcrumbHome current="Movimentações" />
                {confirmation && <Alert severity="success">Cadastrado com sucesso</Alert>}
                {quantityError && <Alert severity="error">Quantidade precisa ser positiva</Alert>}
                <TextField required id="product-id" label="Código" value={id} onChange={handleIdChange} slotProps={{htmlInput:{'data-testid': 'product-id'}}} onBlur={handleIdOnBlur} />
                <TextField id="product-name" label="Nome" value={name ?? ""} onChange={handleNameChange} />
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
                <TextField id="product-quantity" label="Quantidade" type="number" value={quantity} onChange={handleQuantityChange} slotProps={{htmlInput: {'data-testid': 'quantity'}}} 
                    {...(productDetails && {helperText: `Quantidade atual: ${productDetails.quantity}. Quantidade deve ser positiva!`})}/>
                <Button disabled={!submitEnabled} variant="contained" onClick={handleUpdate} {...{"data-testid": "cadastrar"}}>Cadastrar</Button>
            </Stack>
        </Box>
    )
}