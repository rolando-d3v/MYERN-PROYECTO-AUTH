import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length } from "class-validator";


@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  @Length(6, 25, { message: "Password Debe tener al menos 6 caracteres" })
  password: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  IPv4: string;

  @Column()
  codigo: string;

}
