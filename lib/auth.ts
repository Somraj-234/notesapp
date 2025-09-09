import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { transporter } from "./smtp";
import EmailVerification from "@/components/verificationEmailTemplate";
import { render, pretty } from "@react-email/render";
import PasswordReset from "@/components/resetPasswordEmailTemplate";

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const emailHtml = await pretty(
        await render(
          EmailVerification({
            userName: user.name,
            verificationUrl: url,
          })
        )
      );
      await transporter.sendMail({
        from: process.env.GOOGLE_HOST_EMAIL,
        to: user.email,
        subject: "Verify Your Email Address",
        html: emailHtml,
      });
    },
    sendOnSignUp: true,
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const emailHtml = await pretty(
        await render(
          PasswordReset({
            userName: user.name,
            resetUrl: url,
          })
        )
      );
      await transporter.sendMail({
        from: process.env.GOOGLE_HOST_EMAIL,
        to: user.email,
        subject: "Reset Your Password",
        html: emailHtml,
      });
    },
    sendOnSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
