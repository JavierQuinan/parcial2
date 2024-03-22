import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME,
                   audience: process.env.API_URL,
                   }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Agrega JwtStrategy a los providers
  exports: [PassportModule, JwtModule], // Exporta PassportModule y JwtModule
})
export class AuthModule {}
