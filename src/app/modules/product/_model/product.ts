export class Product{
    id_product: number;
    gtin: string;
    product: string;
    description: string;
    price: number;
    stock: number;
    id_category: number;
    status: number;

    constructor(){
        this.id_product = 0;
        this.gtin = "";
        this.product = "";
        this.description = "";
        this.price = 0.0;
        this.stock = 0;
        this.id_category = 0;
        this.status = 1;
    }
}