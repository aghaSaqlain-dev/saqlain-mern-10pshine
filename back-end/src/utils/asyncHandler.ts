import { RequestHandler } from "express";

const asyncHandler = (fn: (...args: any[]) => Promise<any>): RequestHandler =>
  (req, res, next) => fn(req, res, next).catch(next);

export default asyncHandler;
