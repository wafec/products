export class ProductBase {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class ProductUpdateModel extends ProductBase {
    quantity: number;

    constructor(id: string, name: string, quantity: number) {
        super(id, name);
        this.quantity = quantity;
    }
}

export class ProductReportModel extends ProductBase {
    entries: number;
    exits: number;
    balance: number;

    constructor(id: string, name: string, entries: number, exits: number, balance: number) {
        super(id, name);
        this.entries = entries;
        this.exits = exits;
        this.balance = balance;
    }
}

export class ProductDetailsModel extends ProductBase {
    quantity: number;

    constructor(id: string, name: string, quantity: number) {
        super(id, name);
        this.quantity = quantity;
    }
}