import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CompaniesService } from './companies.service';
import { CompanyEntity } from './company.entity';


@Crud({
    model: {
        type: CompanyEntity
    }
})
@Controller('companies')
export class CompaniesController implements CrudController<CompanyEntity> {
    constructor(public service: CompaniesService) {}

    @Get("details/:id")
    getDetails(@Param("id") id:number){
        return this.service.getDetails(id)

    }

}
