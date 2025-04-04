import { ProductUpdateModel, ProductReportModel } from "../models/product";

export class ProductsApi {
    update(productUpdate: ProductUpdateModel, actionType: string) {
        console.log(productUpdate, actionType)
    }

    async getReport(): Promise<ProductReportModel[]> {
        const response = await fetch("/api/products")
        const data = await response.json()
        console.log(data)
        return data.message.map((p: any) => {
            return new ProductReportModel(p.id, p.name, p.entries, p.exits, p.balance);
        })
    }
}