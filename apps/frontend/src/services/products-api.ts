import { ProductUpdateModel, ProductReportModel } from "../models/product";

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
        const data = await response.json()
        console.log(data)
        return data.message.map((p: any) => {
            return new ProductReportModel(p.id, p.name, p.entries, p.exits, p.balance);
        })
    }
}