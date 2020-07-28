import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

import {User,Role, Product,Calender} from '../../emtities';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
   
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return this.getOrmConfig()
  }

  private getOrmConfig() {
    return {
      type: this.config.get('database.DB_TYPE'),
      host: this.config.get('database.DB_HOST'),
      port: this.config.get('database.DB_PORT'),
      username: this.config.get('database.DB_USERNAME'),
      password: this.config.get('database.DB_PASSWORD'),
      database: this.config.get('database.DB_DATABASE'),
      synchronize: this.config.get('database.BD_SYNCHRONIZE'),
      logging: this.config.get('database.DB_LOGGING'),
      entities: [User,Role,Product,Calender],
      subscribers: ["dist/subscribers/*/*.subscriber{.ts,.js}"]
    }
  } 
}