import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto, CreateUserDto, Post, User } from 'libs/shared';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async createPost(createPostDto: CreatePostDto) {
    const newPost = this.postRepository.create(createPostDto);
    return await this.postRepository.save(newPost);
  }

  async getPosts(userId?: string) {
    return await this.postRepository.find({
      relations: ['author'],
      where: {
        author: {
          id: userId.length < 1 ? null : userId,
        },
      },
      order: {
        createdAt: 'DESC'
      }
    });
  }

  async getUsers(userId?: string) {
    return await this.userRepository.find({
      relations: ['posts'],
      where: {
        id: userId.length < 1 ? null : userId,
      },
      order: {
        posts: {
          createdAt: 'DESC'
        }
      }
    });
  }
}
