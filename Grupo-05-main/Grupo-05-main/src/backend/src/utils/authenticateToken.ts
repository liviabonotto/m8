import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../services/jwtService";
import { Request, Response, NextFunction } from "express";

declare global {
	namespace Express {
		interface Request {
			user: string | JwtPayload;
		}
	}
}

export const authenticateToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null) return res.sendStatus(401);

	const user = verifyToken(token);
	if (!user) return res.sendStatus(403);

	req.user = user;
	next();
};
