import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Review } from "./Review";

@Entity()
export class Rating {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: string;

  @Column("datetime")
  created_at;

  @Column("datetime")
  updated_at;

  @ManyToOne(type => Review, reviews => reviews.ratings)
  @JoinColumn({ name: "review_id" })
  reviews: Review[]
}