import { Injectable,NotFoundException } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, UserLogin } from './user.entity';

import * as bcrypt from 'bcrypt';
import { Users } from './user.entity';
import { jwtConstants } from '../auth/constant';

export interface SignedSuccess{
    name:string;
    token:string;
    authenticated:boolean
}

export interface LoginSuccess{
    name:string;
    token:string;
    authenticated:boolean;
};
@Injectable()
export class UsersService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
       
      ) {}
    
    // sign up function, we should apply the auth guard in here

    async signup(body:IUser):Promise<Error|SignedSuccess|object>{
        try{
            const user:IUser = await this.userRepository.findOne({email:body.email})
            if(user){
                return new NotFoundException("INCORRECT USER")
            }
            // hash the password and save the new user
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(body.password, salt);
            body.password=hash
            await this.userRepository.save(body)
            // create a token and set it in an object with an athenticated setted to true
            const newToken = await this.jwtService.sign({
                email:body.email,
                secret:jwtConstants.secret
            })
            
            return {
                name:body.name,
                token:newToken,
                authenticated:true,
            }
            
        }
        catch(error){
            // return error
            return new Error("User Already exists")
        }
    }

    async login(body:UserLogin):Promise<Error|LoginSuccess>{
        try{
            console.log(body)
            const user:IUser = await this.userRepository.findOne({email:body.email})
            if(user){
                const passwordChecked = bcrypt.compareSync(body.password, user.password);
                if(passwordChecked){
                    const newToken = await this.jwtService.sign({
                        email:body.email,
                        secret:jwtConstants.secret
                    })
                    return {
                        name:user.name,
                        token:newToken,
                        authenticated:true,
                    }
                }else{
                     return new NotFoundException("INCORRECT email OR PASSWORD")

                }
            }
            return new NotFoundException("INCORRECT email OR PASSWORD")
        }catch(error){
            return new Error("USER DOES NOT EXISTS")
        }
    }

}
