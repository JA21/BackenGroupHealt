import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Role{
  @PrimaryGeneratedColumn()
  idRole: number;

  @Column()
  name: string;
  
  @Column()
  description: string;
}