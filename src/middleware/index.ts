import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Retornamos después de enviar una respuesta para evitar conflictos de tipos
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next(); // Si no hay errores, pasa al siguiente middleware
};
