import {Injectable} from 'angular2/core';
import {tokenNotExpired} from "../helper/angular2-jwt";

@Injectable()
export class AuthService {
  constructor() {}

  public authenticated() {
    return tokenNotExpired();
  }
}
