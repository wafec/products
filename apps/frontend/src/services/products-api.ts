import { ProductUpdateModel, ProductReportModel, ProductDetailsModel } from "../models/product";

export class ProductsApi {
    async update(productUpdate: ProductUpdateModel, actionType: string) {
        await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({
                id: productUpdate.id,
                name: productUpdate.name,
                quantity: productUpdate.quantity,
                actionType: actionType
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async getReport(startDate: string, endDate: string): Promise<ProductReportModel[]> {
        const response = await fetch(`/api/products?startDate=${startDate}&endDate=${endDate}`)
        if (response.status != 200) {
            // TODO: create a message in the UI
            console.warn("Error retrieving products")
            return []
        }
        const data = await response.json()
        return data.message.map((p: any) => {
            return new ProductReportModel(p.id, p.name, p.entries, p.exits, p.balance);
        })
    }

    async getProductDetails(id: string): Promise<ProductDetailsModel | undefined> {
        const response = await fetch(`/api/products/${id}`)
        if (response.status == 404) {
            return undefined;
        }
        const data = await response.json()
        return new ProductDetailsModel(data.id, data.name, data.quantity);
    }
}