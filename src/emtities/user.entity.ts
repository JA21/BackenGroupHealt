import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "./rol.entity";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id_user:number;

    @Column('varchar')
    usernam:string;

    @Column('text')
    password:string;

    @Column('boolean')
    state:boolean;

    @ManyToOne(type=>Role)
    @JoinColumn({name:'idRole'})
    role:Role

    
}