import { Controller } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto, CreatePostDto } from 'libs/shared';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @MessagePattern({ cmd: 'database.create.user' })
  createUser(@Payload() createUserDto: CreateUserDto) {
    return this.databaseService.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'database.create.post' })
  createPost(@Payload() createPostDto: CreatePostDto) {
    return this.databaseService.createPost(createPostDto);
  }

  @MessagePattern({ cmd: 'database.get.users' })
  getUsers(@Payload() userId?: string) {
    return this.databaseService.getUsers(userId);
  }

  @MessagePattern({ cmd: 'database.get.posts' })
  getPosts(@Payload() userId?: string) {
    return this.databaseService.getPosts(userId);
  }
}
