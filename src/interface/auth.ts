import {IRol} from './rol'

// Generated by https://quicktype.io

export interface IAuth {
  user:  AuthUser;
  token: string;
}

export interface AuthUser {
  id:       number;
  email:    string;
  password: string;
  rol:      IRol;
}
