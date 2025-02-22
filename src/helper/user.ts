import { Request } from 'express';

export const getUser = (req: Request): { userId: number; email: string } => {
  return req['user'];
};
