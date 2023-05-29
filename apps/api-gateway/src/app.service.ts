import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, CreatePostDto } from 'libs/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP, options: { port: 4002 } })
  postClient: ClientProxy;

  @Client({ transport: Transport.TCP, options: { port: 4001 } })
  userClient: ClientProxy;

  getUsers(userId?: string) {
    return firstValueFrom(this.userClient.send('users.get', userId || ''));
  }

  getPosts(userId?: string) {
    return firstValueFrom(this.postClient.send('posts.get', userId || ''));
  }

  createUser(createUserDto: CreateUserDto) {
    return firstValueFrom(this.userClient.send('users.create', createUserDto));
  }

  createPost(createPostDto: CreatePostDto) {
    return firstValueFrom(this.postClient.send('posts.create', createPostDto));
  }
}
