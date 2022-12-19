import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(newUser);
  }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepo.update(id, updateUserDto);
    return user;
  }

  async remove(id: number) {
    return await this.usersRepo.delete(id);
  }
}
