import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
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
  reviews: Review[]
}
