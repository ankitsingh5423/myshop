import express from "express";
import authValidationRules from "../validators/auth.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  register,
  verifyUser,
  resendVerificationEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", authValidationRules.register, validate, register);

router.get(
  "/verify-user/:verificationToken",
  authValidationRules.verifyUser,
  validate,
  verifyUser
);

router.post(
  "/resend-verification-email",
  authValidationRules.resendVerificationEmail,
  validate,
  resendVerificationEmail
);

export default router;
