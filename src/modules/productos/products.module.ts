import { Module } from '@nestjs/common';
import { ProducService } from './products.service';
import { ProductController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Role, Product} from '../../emtities';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProducService],
  controllers: [ProductController]
})
export class ProductsModule{}