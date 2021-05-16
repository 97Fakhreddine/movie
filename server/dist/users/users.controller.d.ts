import { UsersService } from './users.service';
import { IUser, UserLogin } from '../users/user.entity';
export declare class UsersController {
    private readonly userRepository;
    constructor(userRepository: UsersService);
    signup(body: IUser): Promise<string | Error>;
    login(body: UserLogin): Promise<object | string | Error>;
}
