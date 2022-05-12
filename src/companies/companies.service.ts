import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompaniesService extends TypeOrmCrudService<CompanyEntity> {
    async getDetails(id: number): Promise<{}> {
        const result: any = await this.find({
            relations: ['products'],
            where: {
                id: id
            }
        })
        if (result.length > 0) return result[0]
        else throw new NotFoundException("Could not find company.");
        
    }
    constructor(@InjectRepository(CompanyEntity) repo: any) {
        super(repo)
    }
    
}
