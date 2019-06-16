import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { Property } from "./Property";

@Entity()
export class Properties_tag {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Tag, tags => tags.properties_tags)
  @JoinColumn({ name: "tag_id" })
  tags: Tag

  @ManyToOne(type => Property, properties => properties.properties_tags)
  @JoinColumn({ name: "property_id" })
  properties: Property
}
