import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Length } from "class-validator";
import { User } from './User';


export enum estadoActivo {
  true = "true",
  false = "false",
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  precio: number;

  @Column()
  stock: number;

  @Column({
    type: "enum",
    enum: estadoActivo,
    default: estadoActivo.true,
  })
  estado: estadoActivo;

  @ManyToOne(type => User, user => user.products)
  @JoinColumn()
  user: User

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
