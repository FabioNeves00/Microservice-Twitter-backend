import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import type { UserType } from ".";
import type { PostType } from "../posts";
import { Post } from "../posts/post.entity";

@Entity({ name: 'users' })
export class User implements UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Post, _post => _post.author)
  posts: PostType[] | string[];
}