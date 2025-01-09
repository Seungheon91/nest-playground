import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get('/users/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post('/users')
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put('/users/:id')
  updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
