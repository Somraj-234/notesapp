import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Tailwind,
} from "@react-email/components";

interface PasswordReset {
  userName: string;
  resetUrl: string;
}

const PasswordReset = ({ userName, resetUrl }: PasswordReset) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="mb-[32px]">
              <Text className="text-[24px] font-bold text-gray-900 m-0 mb-[16px]">
                Reset your password
              </Text>
              <Text className="text-[16px] text-gray-700 m-0 mb-[32px]">
                Hi {userName} We received a request to reset your password.
                Click the button below to create a new one.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="mb-[32px]">
              <Button
                href={resetUrl}
                className="bg-black text-white px-[20px] py-[12px] rounded-[12px] text-[14px] font-semibold no-underline box-border inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Security Note */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 m-0">
                If you didn't request this password reset, you can safely ignore
                this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section>
              <Text className="text-[16px] text-gray-700 m-0">
                See you there,
                <br />
                The NotesApp Team.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordReset;
