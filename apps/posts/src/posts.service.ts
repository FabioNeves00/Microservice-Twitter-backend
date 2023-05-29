import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { CreatePostDto, Post } from 'libs/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PostsService {
  @Client({ transport: Transport.TCP, options: {
    port: 4000
  } })
  private readonly databaseClient: ClientProxy

  async createPost(createPostDto: CreatePostDto) {
    return firstValueFrom<Post>(this.databaseClient.send({ cmd: 'database.create.post' }, createPostDto))
  }

  async getPosts(userId?: string) {
    return firstValueFrom<Post[]>(this.databaseClient.send({ cmd: 'database.get.posts' }, userId))
  }
}
