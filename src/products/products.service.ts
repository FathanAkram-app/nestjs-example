import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ProductEntity, ProductModel } from "./product.entity";

@Injectable()
export class ProductsService extends TypeOrmCrudService<ProductEntity>{
    constructor(@InjectRepository(ProductEntity) repo: any) {
        super(repo)
    }
    // products: ProductModel[] = []

    // insertProduct(title: string, desc: string, price: number): {} {
    //     const newProduct = new ProductModel(this.products.length.toString(),title,desc,price);
    //     this.products.push(newProduct)
    //     return {id: newProduct.id}

    // }

    // getAllProducts(): ProductModel[] {
    //     return this.products
    // }

    // getProduct(prodId: string): ProductModel {
    //     return this.products.find(prod => prod.id === prodId)
    // }
}