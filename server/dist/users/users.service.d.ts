import { Repository } from 'typeorm';
import { IUser, UserLogin } from './user.entity';
import { Users } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    signup(body: IUser): Promise<Error | string>;
    login(body: UserLogin): Promise<Error | object>;
}
