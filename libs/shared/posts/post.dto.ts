import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 122)
  content: string;

  @IsUUID()
  author: string;
}