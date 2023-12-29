import API from '../api';
import { Login } from '../models';

const requestString = `/pub/login`;

export class LoginAPI {
  static async createLogin(login: Login): Promise<any> {
    return API.post(
      requestString,
      {
        ...login
      }
    ).then((res) => res.data);
  }
}
