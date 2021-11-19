import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsEmail } from "class-validator";

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
    default: userActivo.true,
  })
  estado: userActivo;
}
