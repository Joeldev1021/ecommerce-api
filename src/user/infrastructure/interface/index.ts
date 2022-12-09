import { Request } from "express";

export interface AuthRequest<T> extends Request {
  body: T;
}
