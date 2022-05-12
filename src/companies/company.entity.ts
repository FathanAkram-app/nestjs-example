import { BaseEntity } from "src/base-entity";
import { ProductEntity } from "src/products/product.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('companies')
export class CompanyEntity extends BaseEntity {
    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({type: 'varchar', length: 500, nullable: true})
    description: string;

    @OneToMany(type => ProductEntity, product => product.company)
    products: ProductEntity[];
}