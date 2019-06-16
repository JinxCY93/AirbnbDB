import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Review } from "./Review";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column("datetime")
  created_at;

  @Column("datetime")
  updated_at;

  @ManyToOne(type => Review, reviews => reviews.comments)
  @JoinColumn({ name: "review_id" })
  reviews: Review[]
}
