

import { IsString, IsBoolean, IsInt, IsNotEmpty, LENGTH, Length } from 'class-validator';

export class NewCalender {

    @IsString()
    
    activity_calender: string;

    @IsString()
    date_calender: string;

    @IsInt()
    state_calender:number;

    @IsInt()
    fk_user: number;



}