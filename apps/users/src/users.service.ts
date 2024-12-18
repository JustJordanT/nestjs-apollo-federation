import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  create(createUserInput: CreateUserInput) {
    console.log('createUserInput', createUserInput);
    this.users.push(createUserInput);
    return createUserInput;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
