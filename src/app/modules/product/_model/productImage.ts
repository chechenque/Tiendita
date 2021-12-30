export class ProductImage{
    id_product_image: number;
    id_product: number;
    image: string;
    status: number;
    
    constructor(){
        this.id_product_image = 0;
        this.id_product = 0;
        this.image = "";
        this.status = 1;
    }

}