import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import {
  registerUserService,
  sendUserVerificationEmailService,
} from "../services/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await registerUserService({ username, email, password });

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
