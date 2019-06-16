import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties_tag } from "./Properties_tag";

@Entity()
export class Tag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @OneToMany(type => Properties_tag, properties_tags => properties_tags.tags)
  properties_tags: Properties_tag
}
