import { Product, ProductReport } from "../models/product";

export class ProductsApi {
    update(product: Product, actionType: string) {
        console.log(product, actionType)
    }

    async getReport(): Promise<ProductReport[]> {
        return [
            new ProductReport(new Product("1", "Produto 1", 10), 10, 5),
        ];
    }
}