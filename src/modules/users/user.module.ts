import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Role} from '../../emtities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule{}