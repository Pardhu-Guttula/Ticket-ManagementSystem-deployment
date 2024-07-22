import { Response } from 'express';

export const errorMessages: { [key: string]: string } = {
  400: 'Bad Request',
  404: 'Resource Not Found',
  500: 'Internal Server Error',
};

export function handleHttpError(res: Response, statusCode: number, message?: string): void {
  res.status(statusCode).json({ error: message || errorMessages[statusCode] });
}

export function handle400Error(res: Response, message?: string): void {
  handleHttpError(res, 400, message);
}

export function handle404Error(res: Response, message?: string): void {
  handleHttpError(res, 404, message);
}

export function handle500Error(res: Response, error?: unknown): void {
    console.error('Unhandled error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    handleHttpError(res, 500, errorMessage);
  }