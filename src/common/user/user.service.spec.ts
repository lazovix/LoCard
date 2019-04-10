import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './user';
import { UserToken } from './token/user-token';
import { UserTokenService } from './token/user-token.service';

describe('UserService', () => {
  let service: UserService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserTokenService],
    }).compile();
    service = module.get<UserService>(UserService);
  });
  it('should be instance of User', () => {
    expect(service.getUser('user@user.ru', '87654321')).toBeInstanceOf(User);
  });
  it('should be instance of UserToken', () => {
    expect(service.getToken()).toBeInstanceOf(UserToken);
  });
});
