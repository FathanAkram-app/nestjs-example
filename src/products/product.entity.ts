import { BaseEntity } from "src/base-entity";
import { Column, Entity } from "typeorm";


export class ProductModel {
    constructor(public id: string, public title: string, public description: string, public price: number) {}
    
}

@Entity('products')
export class ProductEntity extends BaseEntity {
    @Column({type: 'varchar', length: 100, nullable: false})
    title: string;

    @Column({type: 'varchar', length: 500, nullable: true})
    description: string;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    price: number;

}