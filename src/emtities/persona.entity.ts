import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Persona{
  @PrimaryGeneratedColumn()
  idPerson: number;

  @Column()
  name: string;
  
  @Column()
  lastname  : string;

  @Column()
  phone : number;
}