import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Property } from "./Property";

@Entity()
export class Owner {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contact_no: string;

  @Column("datetime")
  created_at;

  @Column("datetime")
  updated_at;

  @OneToMany(type => Property, properties => properties.owners)
  properties: Property[]
}
