import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostType } from ".";
import { UserType } from "../users";
import { User } from "../users/user.entity";

@Entity({ name: 'posts' })
export class Post implements PostType {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ManyToOne(() => User)
  author: UserType | string;

  @Column({ type: 'varchar', length: 122 })
  content: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  
}