import { SignedSuccess, UsersService, LoginSuccess } from './users.service';
import { IUser, UserLogin } from '../users/user.entity';
export declare class UsersController {
    private readonly userRepository;
    constructor(userRepository: UsersService);
    signup(body: IUser): Promise<SignedSuccess | Error | object>;
    login(body: UserLogin): Promise<LoginSuccess | Error>;
}
