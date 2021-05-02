import { User } from "../../shared/models/user.interface";

export enum AuthTypes {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login success',
  LOGIN_FAIL = '[AUTH] Login fail',
}

export interface AuthState {
  user: User;
  recoverSent: boolean;
  loading: boolean;
  loadingPass: boolean;
  error: any;
  recoverSuccess: boolean;
}

export const authInitialState = {
  user: null,
  recoverSent: false,
  recoverSuccess: false,
  loading: true,
  error: null,
  loadingPass: false,
};