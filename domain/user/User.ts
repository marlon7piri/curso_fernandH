import {UserProperties} from '../../type/properties';

export default class User {
  private constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
  ) {}

  static fromProperties(properties: UserProperties) {
    const {email, name, id} = properties;
    return new User(email, name, id);
  }

  get properties(): UserProperties {
    return Object.freeze({
      id: this.id,
      email: this.email,
      name: this.name,
    });
  }
}
