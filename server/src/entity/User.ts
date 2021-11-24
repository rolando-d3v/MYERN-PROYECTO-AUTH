import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Length, IsEmail } from "class-validator";
import { Product } from "./Product";

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
    enum: ["true", "false"],
    default: "false",
  })
  estado: string;

  @OneToMany((type) => Product, (product) => product.user)
  products: Product[];

  //hace k no return en json el password
  toJSON() {
    return { ...this, password: undefined };
  }
}
