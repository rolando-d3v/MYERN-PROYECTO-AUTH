import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Length } from "class-validator";


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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
