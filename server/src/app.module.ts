import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constant';
import { UsersController } from './users/users.controller';
@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '25h' },
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
