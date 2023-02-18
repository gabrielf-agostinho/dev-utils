import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message: string = `Resource ${request.route} not found`;

  response.status(404).send(message);
}