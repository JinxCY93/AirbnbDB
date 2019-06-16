import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { State } from "./State";
import { Property } from "./Property";

@Entity()
export class City {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => State, states => states.cities)
  @JoinColumn({ name: "state_id" })
  states: State

  @OneToMany(type => Property, properties => properties.cities)
  properties: Property[]
}
