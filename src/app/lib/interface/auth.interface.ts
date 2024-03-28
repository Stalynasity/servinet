
export interface LoginResponse {
  statusCode: number;
  data?: LoginData;
  message?: string;
}

export interface LoginData {
  userName: string;
  token: string;
}

export interface Usuario {
  username: string;
  email:    string;
  password: string;
  rolRolid: number;
}

