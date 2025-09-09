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

interface EmailVerificationProps {
  userName: string;
  verificationUrl: string;
}

const EmailVerification = ({
  userName,
  verificationUrl,
}: EmailVerificationProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="mb-[32px]">
              <Text className="text-[24px] font-bold text-gray-900 m-0 mb-[16px]">
                Confirm your email
              </Text>
              <Text className="text-[16px] text-gray-700 m-0 mb-[32px]">
                {` hi ${userName} You're almost there! We just need to confirm your email address
                to create your account.`}
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-black text-white px-[20px] py-[12px] rounded-[12px] text-[14px] font-semibold no-underline box-border inline-block"
              >
                Confirm Email
              </Button>
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

export default EmailVerification;
