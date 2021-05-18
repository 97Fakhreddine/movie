import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { Users } from 'src/users/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,@InjectRepository(Users)
        private userRepository: Repository<Users>,){}


        async verifyUser(header):Promise<Error|any>{

            try {

                const token = await header.authorisation.split(' ')[1];
                
                const verify = await this.jwtService.verify(token, { secret: jwtConstants.secret});
              

                // console.log( "verify",verify);
                
                if(verify.email){
                    const user = await this.userRepository.findOne({
                        email:verify.email
                    })
                    const newToken = this.jwtService.sign({
                        email:user.email,
                        secret:jwtConstants.secret
                    })
                    return {
                        authenticated:true,
                        token:newToken
                    }

                }

              } 
              catch (err) {
                return new NotFoundException(err.message);
              }
        }
        
}
