export interface AuthI {
  token: string;
  user: User;
}

export interface User {
  pk: number;
  uid: number;
  email: string;
  role: Role;
  image: string;
  position: Role;
}

export interface Role {
  id: number;
  description: string;
}
