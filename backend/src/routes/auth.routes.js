import express from "express";
import authValidationRules from "../validators/auth.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
import { register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", authValidationRules.register, validate, register);

export default router;
