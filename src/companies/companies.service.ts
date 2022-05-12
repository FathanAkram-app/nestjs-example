import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompaniesService extends TypeOrmCrudService<CompanyEntity> {
    getDetails(id: number) {
        const result: any = this.find({
            relations: ['products'],
            where: {
                id: id
            }
        })
        return result
    }
    constructor(@InjectRepository(CompanyEntity) repo: any) {
        super(repo)
    }
    
}
