import User from './User';

export default interface UserRepository {
  registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<User>;
  /*  loginUser(email: string, password: string): Promise<User>;
  getCurrentUser(idUser: string): Promise<User>; */
  logout(): Promise<void>;
}
