import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constant';
import { Users } from './user.entity';

@Module({ imports: [
  TypeOrmModule.forFeature([Users]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '25h' },
  })],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, JwtModule, TypeOrmModule.forFeature([Users])],
})
export class UsersModule {}
