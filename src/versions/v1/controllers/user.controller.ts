import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    if (this.userService.getUser(email, password)) {
      return this.userService.getToken();
    } else {
      throw new UnauthorizedException();
    }
  }
}
