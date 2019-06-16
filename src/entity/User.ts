import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";
@Entity()
export class User {

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

    @OneToMany(type => Booking, bookings => bookings.users)
    bookings: Booking[]

    @OneToMany(type => Review, reviews => reviews.users)
    reviews: Review[]
}
