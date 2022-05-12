import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { CreateManyDto, Crud, CrudController, CrudRequest, CrudService, GetManyDefaultResponse } from "@nestjsx/crud";
import { ProductEntity, ProductModel } from "./product.entity";
import { ProductsService } from "./products.service";

@Crud({
    model: {
        type: ProductEntity
    }
})
@Controller('products')
export class ProductsController implements CrudController<ProductEntity>{
    constructor(public service: ProductsService){
    }
    

    // @Post('insert')
    // addProduct(
    //     @Body('title') prodTitle:string, 
    //     @Body('description') prodDesc:string,
    //     @Body('price') prodPrice:number): any {
    //     return this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
    // }

    // @Get('getAll')
    // getAllProducts(){
    //     return this.productsService.getAllProducts();
    // }

    // @Get('get/:id')
    // getProduct(@Param('id') prodId: string){
    //     const product = this.productsService.getProduct(prodId);

    //     if (!product) {
    //         throw new NotFoundException("Could not find product");
    //     }

    //     return product;
    // }
}