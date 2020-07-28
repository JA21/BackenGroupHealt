import { IsString, IsBoolean, IsInt, IsNotEmpty, LENGTH, Length, IsOptional } from 'class-validator';

export class Newproduct {

    @IsString()
    @IsNotEmpty()
    @Length(5)
    "nameproduct": string;

    @IsBoolean()
    @IsNotEmpty()
    "state": boolean;

    @IsInt()
    @IsNotEmpty()
    "stop": number;

    @IsString()
    "descrip": string;

}