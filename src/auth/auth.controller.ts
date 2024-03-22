import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/users/dto/user.dto';

@ApiTags('Autenticación')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post('singIn')
    async singIn(@Req() req) {
      return { req };
    }
    @Post('singup')
    async singUp(@Body() userDTO: UserDTO) {
      return await this.authService.singUp(userDTO);
    }
  }
  


