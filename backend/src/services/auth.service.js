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
    const verificationLink = `${process.env.BACKEND_URL}/api/v1/verify-email?token=${verificationToken}`;

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
