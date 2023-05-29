import type { PostType } from "../posts";

export type UserType = {
  id: string;
  email: string;
  name: string;
  posts: PostType[] | string[];
}

export type UserDtoType = {
  email: string;
  name: string;
}