import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Properties_tag } from "./Properties_tag";
import { City } from "./City";
import { Review } from "./Review";

@Entity()
export class Property {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Booking, bookings => bookings.properties)
  bookings: Booking[]

  @Column()
  address: string;

  @ManyToOne(type => Owner, owners => owners.properties)
  @JoinColumn({ name: "owner_id" })
  owners: Owner

  @Column("datetime")
  created_at;

  @Column("datetime")
  updated_at;

  @OneToMany(type => Properties_tag, properties_tags => properties_tags.properties)
  properties_tags: Properties_tag

  @ManyToOne(type => City, cities => cities.properties)
  @JoinColumn({ name: "city_id" })
  cities: City

  @OneToOne(type => Review, reviews => reviews.properties)
  reviews: Review[]
}
