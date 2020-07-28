import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Role } from '../../emtities';
import { Newuserdto } from './Dto/newuser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  async getUsers(): Promise<User[]>{
    
    return  await this.userRepository.find();
  }

  async createUser(data : Newuserdto): Promise<User>{
    let user = new User();
    user.usernam = data.username;
    user.password=data.password;
    user.role=new Role();
    user.state=true;
    user.role.idRole = data.role;
  
    
    return await this.userRepository.save(user);
  }

  async getUserId(id){
    return await this.userRepository.createQueryBuilder()
    .select(
     "id_User", "id_User")
      .addSelect("usernam", "usernam")
      .addSelect("password", "password")
      .addSelect("status", "status")
      
      .where("id_User = :ids", { ids: id })
      .execute();

    
  
  }
}