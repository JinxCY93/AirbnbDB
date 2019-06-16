import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Property } from "./Property";
import { User } from "./User";
import { Rating } from "./Rating";
import { Comment } from "./Comment";

@Entity()
export class Review {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("datetime")
  created_at;

  @Column("datetime")
  updated_at;

  @OneToOne(type => Property, properties => properties.reviews)
  @JoinColumn({ name: "property_id" })
  properties: Property

  @ManyToOne(type => User, users => users.reviews)
  @JoinColumn({ name: "user_id" })
  users: User

  @OneToMany(type => Rating, ratings => ratings.reviews)
  @JoinColumn({ name: "rating_id" })
  ratings: Rating

  @OneToMany(type => Comment, comments => comments.reviews)
  @JoinColumn({ name: "comment_id" })
  comments: Comment
}
