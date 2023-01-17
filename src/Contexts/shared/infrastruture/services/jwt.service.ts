import { injectable } from 'inversify';
import jwt, { type SignOptions } from 'jsonwebtoken';

export interface JwtPayload {
	id: string;
}

const jwtSecret = process.env.JWT_SECRET_KEY || 'default_secret';

@injectable()
export class JwtService {
	async verifyToken(token: string): Promise<JwtPayload> {
		return jwt.verify(token, jwtSecret) as JwtPayload;
	}

	async signToken(
		payload: JwtPayload,
		signOptions: SignOptions
	): Promise<string> {
		return jwt.sign(payload, jwtSecret, signOptions);
	}
}
