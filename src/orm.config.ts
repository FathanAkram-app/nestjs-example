import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config: TypeOrmModuleOptions = {
    type: "postgres",
    port: 5433,
    password: '',
    host: "localhost",
    username: "fathanakram",
    database: "testingnestjs",
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    

}