export interface UserPayload {
  id: string;
  email: string;
  name: string;
  user_type: string;
  createdAt: Date;
  iat?: number;
  exp?: number;
}
