import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.verifySecret, { expiresIn: '7d'});
};
