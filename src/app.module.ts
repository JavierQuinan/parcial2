import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GuiasModule } from './guias/guias.module';
import { AuthModule } from './auth/auth.module';
import { ViajesModule } from './viaje/viaje.module';
import { TuristasModule } from './turista/turista.module';
import { DestinosModule } from './destino/destino.module';
import { UsersModule } from './users/users.module';
import { RelacionController } from './relaciones/relaciones.controller';
import { RelacionModule } from './relaciones/relaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/parcial2'),
    UsersModule,
    ViajesModule,
    DestinosModule,
    GuiasModule,
    TuristasModule,
   AuthModule,
   RelacionModule,
  ],
  controllers: [AppController, RelacionController],
  providers: [AppService],
})
export class AppModule {}
