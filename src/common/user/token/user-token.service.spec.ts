import { Test, TestingModule } from '@nestjs/testing';
import { UserToken } from './user-token';
import { UserTokenService } from './user-token.service';

describe('UserTokenService', () => {
  let service: UserTokenService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTokenService],
    }).compile();
    service = module.get<UserTokenService>(UserTokenService);
  });
  it('should be instance of UserToken', () => {
    expect(service.generate()).toBeInstanceOf(UserToken);
  });
});
