import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserTokenService } from './token/user-token.service';
import { UserToken } from './token/user-token';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) {}

  getUser(email: string, password: string): User {
    return this.users.find(user => user.email === email && user.password === password);
  }

  getToken(): UserToken {
    return this.userTokenService.generate();
  }

}
