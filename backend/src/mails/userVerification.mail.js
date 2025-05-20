export const userVerificationTemplate = ({ name, verificationLink }) => {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;padding:20px;border-radius:10px;">
    <h2 style="color:#4CAF50;">Welcome, ${name}!</h2>
    <p>Thank you for signing up. Please click the button below to verify your email address:</p>
    <a href="${verificationLink}" target="_blank" style="display:inline-block;margin-top:20px;background-color:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Verify Email</a>
    <p style="margin-top:30px;">If you didn't create this account, you can safely ignore this email.</p>
    <p style="color:#888;">- ${process.env.APP_NAME}</p>
  </div>
`;
};
