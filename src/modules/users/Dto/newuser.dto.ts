
    

import { IsString, IsBoolean, IsInt, IsNotEmpty, LENGTH, Length } from'class-validator';
 
export class Newuserdto {
 
    @IsString()
    @IsNotEmpty()
    @Length(5)
"username": string;
 
    @IsBoolean()
"state": boolean;
 
    @IsInt()
"role": number;
 
    @IsString()
    "password":string;

 

}