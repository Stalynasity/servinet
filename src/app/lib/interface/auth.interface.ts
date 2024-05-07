
export interface LoginResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
}

export interface LoginData {
  userName: string;
  rolId: number;
  token: string;
}

export interface Usuario {
  username: string;
  email:    string;
  password: string;
  rolRolid: number;
}

