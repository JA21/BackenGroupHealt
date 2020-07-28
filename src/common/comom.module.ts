import { Module, Global } from "@nestjs/common";

import {ConfigModule} from '@nestjs/config';

import configuration from './config/enviroments.config';

import { TypeOrmModule } from "@nestjs/typeorm";

import { TypeOrmConfigService } from "./providers/ormconfig.services";


@Global()
@Module({
    imports: [
      ConfigModule.forRoot({
        load: [configuration],
        envFilePath: process.cwd()+'/environments/develoment.env',
        isGlobal: true, 
      }),
      TypeOrmModule.forRootAsync({
      
        useClass: TypeOrmConfigService,
      }),
    ],
    providers: [TypeOrmConfigService],
    exports: [TypeOrmConfigService]
  })

  export class CommonModule{}