import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignedSuccess, UsersService, LoginSuccess } from './users.service';
import { IUser, UserLogin } from '../users/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userRepository: UsersService){}

    @Post("register")
   async signup(@Body() body: IUser): Promise<SignedSuccess | Error|object> {
        return this.userRepository.signup(body);
      }
    @Post('login')
      login(@Body() body: UserLogin): Promise<LoginSuccess  | Error> {
        return this.userRepository.login(body);
      }
}
