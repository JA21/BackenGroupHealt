import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    idProduct:number;

    @Column('varchar')
    nameproduct:string;

    @Column('int')
    stop:number;

    @Column('boolean')
    state:boolean;

    @Column('text')
    descrip:string;
}