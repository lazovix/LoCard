import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../../../common/user/user.service';
import { UserToken } from '../../../common/user/token/user-token';
import { UserTokenService } from '../../../common/user/token/user-token.service';

describe('UserController', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserTokenService],
    }).compile();
  });

  describe('login', () => {
    it('should be instance of UserToken', () => {
      const userController = module.get<UserController>(UserController);
      expect(userController.login('user@user.ru', '87654321')).toBeInstanceOf(UserToken);
    });
  });
});
