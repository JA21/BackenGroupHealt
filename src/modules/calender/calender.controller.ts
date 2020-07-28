import { Controller, Get,Post, Body, Param } from '@nestjs/common';

import { Calender } from 'src/emtities';


import { CalenderService } from './calender.service';
import { NewCalender } from './DTO/newcalender.dto';

@Controller('calender')
export class CalnderController {
    constructor(private calenderService: CalenderService) {}
    
    @Get()
    async getCalender(): Promise<Calender[]> {
        return await this.calenderService.getCalender();
    }
    @Post('createcalender')
    async createCalneder(@Body( )data:NewCalender): Promise<Calender> {
        return await this.calenderService.CreateCalender(data);
    }
    @Post('create')
    create(@Body() body: NewCalender) {
        console.log(body);
        return this.calenderService.create(body);
    }
}
