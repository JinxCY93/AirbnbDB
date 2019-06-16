import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ConnectionOptionsReader } from "typeorm";
import { City } from "./City";

@Entity()
export class State {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => City, cities => cities.states)
  cities: City[]
}
