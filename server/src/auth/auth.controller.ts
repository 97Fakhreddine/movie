import { Controller, Get ,Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authRepository: AuthService){}
    @Get('/verify')
    async verifyUser(@Headers()  header ):Promise<Error|any>{
        return this.authRepository.verifyUser(header)
    }
}
