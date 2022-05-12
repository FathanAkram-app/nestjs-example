import { BaseEntity } from "src/base-entity";
import { CompanyEntity } from "src/companies/company.entity";
import { Column, Entity, ManyToOne } from "typeorm";


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

    @ManyToOne(type => CompanyEntity, company => company.products,{nullable: false})
    company: string;

    

}