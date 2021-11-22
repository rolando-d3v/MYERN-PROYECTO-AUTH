import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

///enum
export enum roleActivo {
  true = "true",
  false = "false",
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: roleActivo,
    default: roleActivo.true,
  })
  estado: roleActivo;
}
