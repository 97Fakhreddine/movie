import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constant';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[AuthModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: jwtConstants.expireDate },
  }),UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
