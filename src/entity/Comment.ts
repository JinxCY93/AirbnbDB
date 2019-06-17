import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Rating } from "./Rating";

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

  @OneToOne(type => Rating, ratings => ratings.comments)
  @JoinColumn({ name: "rating_id" })
  ratings: Rating[]
}
