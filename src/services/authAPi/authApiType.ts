export interface IUserInfo {
  id: string;
  name: string; // "zohre";
  phoneNumber: string; // "09357974370";
  email: string; //"zohre@gmail.com";
  createdAt: string;
  updatedAt: string;
  loginAttempts: number;
}

export interface ILoginResponse {
  exp: number;
  message: string;
  token: string;
  user: IUserInfo;
}

export interface ILoginPayload {
  email: string;
  password: string;
}
