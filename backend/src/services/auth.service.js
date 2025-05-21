import { ApiError } from "../utils/apiError.utils.js";
import { User } from "../models/user.model.js";
import { logger } from "../utils/logger.utils.js";
import { userVerificationTemplate } from "../mails/userVerification.mail.js";
import { sendEmail } from "../utils/mail.utils.js";

export const registerUserService = async (userDetails) => {
  try {
    const existingUser = await User.findOne({ email: userDetails.email });

    if (existingUser) {
      throw new ApiError(409, "User already exists.");
    }

    const newUser = await User.create(userDetails);

    return newUser;
  } catch (error) {
    logger.error("Error registering user service: %s", error.message);
    throw error;
  }
};

export const sendUserVerificationEmailService = async (user) => {
  try {
    const verificationToken = await user.generateVerificationToken();
    const verificationLink = `${process.env.BACKEND_URL}/api/v1/auth/verify-user/${verificationToken}`;

    await sendEmail({
      to: user.email,
      subject: "Verify Your Email Address",
      html: userVerificationTemplate({ name: user.username, verificationLink }),
    });
  } catch (error) {
    logger.error("Error sending user verification email: %s", error.message);
    throw error;
  }
};

export const verifyUserService = async (verificationToken) => {
  try {
    const existingUser = await User.findOne({ verificationToken });

    if (!existingUser) {
      throw new ApiError(404, "User not found.");
    }

    if (existingUser?.isVerified) {
      throw new ApiError(409, "User already verified.");
    }

    if (new Date() > existingUser?.verificationTokenExpiry) {
      throw new ApiError(422, "Verification token expired.");
    }

    existingUser.isVerified = true;
    existingUser.verificationToken = undefined;
    existingUser.verificationTokenExpiry = undefined;
    await existingUser.save();

    const accessToken = existingUser.generateAccessToken();
    const refreshToken = existingUser.generateRefreshToken();

    return { accessToken, refreshToken };
  } catch (error) {
    logger.error("Error Verifying user service: %s", error.message);
    throw error;
  }
};

export const resendVerificationEmailService = async (email) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new ApiError(404, "User not found.");
    }

    if (existingUser?.isVerified) {
      throw new ApiError(409, "User already verified.");
    }

    sendUserVerificationEmailService(existingUser);
  } catch (error) {
    logger.error("Error checking valid user service: %s", error.message);
    throw error;
  }
};
