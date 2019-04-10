import { Injectable } from '@nestjs/common';
import { UserToken } from './user-token';
import * as Randomstring from 'randomstring';

@Injectable()
export class UserTokenService {

  generate(): UserToken {
    return new UserToken(Randomstring.generate(32));
  }

}
