import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { IUser, UserLogin } from './user.entity';
import { Users } from './user.entity';
export interface SignedSuccess {
    name: string;
    token: string;
    authenticated: boolean;
}
export interface LoginSuccess {
    name: string;
    token: string;
    authenticated: boolean;
}
export declare class UsersService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<Users>);
    signup(body: IUser): Promise<Error | SignedSuccess | object>;
    login(body: UserLogin): Promise<Error | LoginSuccess>;
}
