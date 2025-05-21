import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.utils.js";
import { findUserById } from "../services/user.service.js";

export const authenticate = async (req, res, next) => {
  try {
    let token = req.cookies?.accessToken;

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw new ApiError(401, "Unauthorized - No access token");
    }

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await findUserById(decoded.userId);
      if (!user) throw new ApiError(404, "User not found");
      req.loggedInUser = user;
      return next();
    } catch (accessError) {
      if (accessError.name === "TokenExpiredError") {
        const refreshToken = req.cookies?.refreshToken;

        if (!refreshToken)
          throw new ApiError(401, "Unauthorized - No refresh token");

        try {
          const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
          );
          const user = await findUserById(decoded.userId);
          if (!user) throw new ApiError(404, "User not found");

          // Generate new access token
          const newAccessToken = generateAccessToken(user._id);

          // Set new access token cookie
          res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: 15 * 60 * 1000, // 15 min
          });

          req.loggedInUser = user;
          return next();
        } catch (refreshError) {
          throw new ApiError(401, "Unauthorized - Invalid refresh token");
        }
      }
      throw new ApiError(401, "Unauthorized - Invalid access token");
    }
  } catch (err) {
    next(err);
  }
};
