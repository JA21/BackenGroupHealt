import { IsString, IsBoolean, IsInt, IsNotEmpty, LENGTH, Length, IsOptional } from 'class-validator';

export class UpdateProductDTO {

    @IsInt()
    idProduct: number;

    @IsString()
    @IsNotEmpty()

    "nameproduct": string;

    @IsBoolean()
    @IsOptional()
    "state": boolean;

    @IsInt()
    @IsOptional()
    "stop": number;

    @IsString()
    @IsOptional()
    "descrip": string;

}