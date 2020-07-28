import { Controller, Get, Param, Post, Put, ParseIntPipe } from "@nestjs/common";

import { ProducService } from './products.service';

import { Product } from 'src/emtities/products.entity';
import { Newproduct } from "./Dto/newproduct.dto";
import { UpdateProductDTO } from "./Dto/updateproduct.dto";


@Controller('products')
export class ProductController {
    constructor(private readonly ProducService: ProducService) { }

    @Get()
    async getProducts(): Promise<Product[]> {
        return await this.ProducService.getProducts();
    }

    @Get('idProduct')
    async findProduct(@Param('idProduct',new ParseIntPipe()) idProduct: number): Promise<Product> {
        return await this.ProducService.findProduct(idProduct);
    }

    @Post()
    async creteProduct(data: Newproduct): Promise<Product> {
        return await this.ProducService.createProduct(data);
    }
    @Put()
    async upDateProuct(data: UpdateProductDTO): Promise<Product> {
        return await this.ProducService.updateProduct(data);
    }

    @Get('idProduct')
    async deleteProduct(@Param('idProduct',new ParseIntPipe()) idProduct: number): Promise<Product> {
        return await this.ProducService.deleteProduct(idProduct);
    }

}