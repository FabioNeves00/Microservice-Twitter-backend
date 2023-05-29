import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, User } from 'libs/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  @Client({ transport: Transport.TCP, options: {
    port: 4000
  } })
  private readonly databaseClient: ClientProxy

  async createUser(createUserDto: CreateUserDto) {
    return firstValueFrom<User>(this.databaseClient.send({ cmd: 'database.create.user' }, createUserDto))
  }

  async getUsers(userId?: string) {
    return firstValueFrom<User[]>(this.databaseClient.send({ cmd: 'database.get.users' }, userId))
  }
}
