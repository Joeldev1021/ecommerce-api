import { NextFunction, Request, Response } from 'express';

export async function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	const token = req.headers.authorization;
	if (token) {
		console.log('token', token);
	}
	next();
}
