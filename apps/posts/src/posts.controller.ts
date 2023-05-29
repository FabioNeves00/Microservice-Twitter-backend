import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePostDto } from 'libs/shared';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @MessagePattern('posts.create')
  createPost(@Payload() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @MessagePattern('posts.get')
  getPosts(@Payload() userId?: string) {
    return this.postsService.getPosts(userId);
  }
}
