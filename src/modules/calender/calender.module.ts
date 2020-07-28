import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User,  Calender} from '../../emtities';
import { CalenderService } from './calender.service';
import { CalnderController } from './calender.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Calender, User])],
  providers: [CalenderService],
  controllers: [CalnderController]
})
export class CalenderModule{}