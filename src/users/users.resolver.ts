import { Resolver, Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
@Resolver('Users')
export class UsersResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
