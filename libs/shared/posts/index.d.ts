import type { UserType } from "../users";

export type PostType = {
  id: string;
  author: UserType | string;
  content: string;
  createdAt: Date
}

export type PostDtoType = {
  content: string;
  author: string;
}