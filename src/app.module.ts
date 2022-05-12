import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), // ORM config
    ProductsModule, // Products module 
    CompaniesModule, // Companies module 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
