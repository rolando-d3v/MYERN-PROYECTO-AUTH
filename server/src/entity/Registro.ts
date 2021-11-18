import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsEmail } from "class-validator";


@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

}
