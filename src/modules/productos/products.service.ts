import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {  Product } from '../../emtities';
import { Newproduct } from './Dto/newproduct.dto';
import {UpdateProductDTO} from './Dto/updateproduct.dto';

@Injectable()
export class ProducService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  async getProducts(): Promise<Product[]>{
    
    return  await this.productRepository.find();
  }

  async findProduct(idProduct: number): Promise<Product>{
    return await this.productRepository.findOne(idProduct)
  }
  async createProduct(data: Newproduct): Promise<Product>{
    let product = new Product();
    product.nameproduct = data.nameproduct;
    product.state = data.state;
    product.stop = data.stop;
    product.descrip = data.descrip;
    return await this.productRepository.save(product);
  }
  async updateProduct(data: UpdateProductDTO): Promise<Product>{
    let product = await this.findProduct(data.idProduct);
    if(product){
      product.nameproduct = data.nameproduct;
      product.descrip = data.descrip;
      product.state = data.state;
      product.stop = data.stop;
      return await this.productRepository.save(product);
    }else{
      throw new NotFoundException("Product not exists");
    }
  }
  async deleteProduct(idProduct: number): Promise<any>{
    return await this.productRepository.delete(idProduct)
  }
}