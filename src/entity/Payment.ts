import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  amount: number;

  @ManyToOne(type => Booking, bookings => bookings.payments)
  @JoinColumn({ name: "booking_id" })
  bookings: Booking
}
