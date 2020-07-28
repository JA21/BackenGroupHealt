import {Entity,PrimaryGeneratedColumn,Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Calender{
    @PrimaryGeneratedColumn()
    idCalend:number;

    @Column("varchar")
    activity_calender:string;

    @Column("varchar")
    date_calender:string;
    
    @Column("int")
    state_calender:number;

    @ManyToOne(type=>User)
    @JoinColumn({name:'id_user'})
    fk_user:User

}
