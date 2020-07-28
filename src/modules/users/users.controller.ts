import { Controller, Get,Post, Body, Param } from '@nestjs/common';

import { UsersService } from './user.service';
import { User } from 'src/emtities';

import {Newuserdto} from './Dto/newuser.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    
    @Get()
    async getUser(): Promise<User[]> {
        return await this.userService.getUsers();
    }
    @Post('create')
    async createUser(@Body( )data:Newuserdto): Promise<User> {
        return await this.userService.createUser(data);
    }

   
    }

