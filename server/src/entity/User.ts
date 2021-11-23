import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Length, IsEmail } from "class-validator";
import { Product } from "./Product";

///enum
export enum userActivo {
  true = "true",
  false = "false",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(6, 100, { message: "Password Debe tener al menos 6 caracteres" })
  password: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column()
  codigo: string;

  @Column({
    type: "enum",
    enum: userActivo,
    default: userActivo.false,
  })
  estado: userActivo;

  @OneToMany((type) => Product, product => product.user)
  @JoinColumn()
  products: Product[];
}
