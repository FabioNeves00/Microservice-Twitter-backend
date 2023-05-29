import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePostDto, CreateUserDto } from 'libs/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(@Query('id') userId?: string) {
    return this.appService.getUsers(userId);
  }

  @Post('users')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Get('posts')
  getPosts(@Query('user') userId?: string) {
    return this.appService.getPosts(userId);
  }

  @Post('posts')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.appService.createPost(createPostDto);
  }
}
