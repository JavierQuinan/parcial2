import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key-here', // Aquí proporciona tu clave secreta
      signOptions: { expiresIn: '1d' }, // Opcional: configuración de opciones de firma
    }),
  ],
  providers: [AuthService, JwtStrategy], // Agrega JwtStrategy a los providers
  exports: [PassportModule, JwtModule], // Exporta PassportModule y JwtModule
})
export class AuthModule {}
