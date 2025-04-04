export class Product {
    id: string;
    name: string;
    quantity: number;

    constructor(id: string, name: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    toString(): string {
        return `Product(id=${this.id}, name=${this.name}, quantity=${this.quantity})`;
    }
}

export class ProductReport {
    product: Product;
    entries: number;
    exits: number;
    balance: number;

    constructor(product: Product, entries: number, exits: number) {
        this.product = product;
        this.entries = entries;
        this.exits = exits;
        this.balance = entries - exits;
    }
}