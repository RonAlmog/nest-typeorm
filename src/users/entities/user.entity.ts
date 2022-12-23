import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // varchar

  @Column()
  email: string;

  @Column()
  phone: string;
}
