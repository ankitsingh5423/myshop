import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import {
  registerUserService,
  resendVerificationEmailService,
  sendUserVerificationEmailService,
  verifyUserService,
} from "../services/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await registerUserService({
    firstName,
    lastName,
    email,
    password,
  });

  sendUserVerificationEmailService(newUser);

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "User registered successfully. Please check your email for verification."
      )
    );
});

export const verifyUser = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params;

  const { accessToken, refreshToken } = await verifyUserService(
    verificationToken
  );

  res.cookie("accesstoken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return res.redirect(303, `${process.env.FRONTEND_URL}/admin/dashboard`);
});

export const resendVerificationEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  await resendVerificationEmailService(email);

  return res
    .status(200)
    .json(new ApiResponse(200, "Verification email sent successfully."));
});
