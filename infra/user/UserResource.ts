import User from '../../domain/user/User';
import UserRepository from '../../domain/user/UserRepository';
import {UserCaller} from './UserCaller';

export class UserResource implements UserRepository {
  constructor(public readonly userCaller: UserCaller) {}
  async registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<User> {
    const userCreated = await this.userCaller.createUser(
      email,
      password,
      username,
    );

    return User.fromProperties(userCreated);
  }

  async logout(): Promise<void> {
    await this.userCaller.logout();
  }
}
