import { NextFunction, Request, Response } from "express";

export const mockPowerPayRequestValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const secret = req.headers.authorization;
        if (!secret || secret === process.env.WEBHOOK_SECRET) {
            res.status(403).json({ message: "Unauthorized" });
            return
        }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
        return
    }
}