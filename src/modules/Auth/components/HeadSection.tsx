import { Alert, Space, Typography } from "antd";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

type AuthHeaderTypes = {
  path: string[];
  title: string;
  description: string;
};

const AUTH_HEADER: AuthHeaderTypes[] = [
  {
    path: ["/auth/login", "/auth/login/"],
    title: "Get Started Now",
    description: "Enter your credentials to access your account.",
  },
  {
    path: ["/auth/send-otp", "/auth/send-otp/"],
    title: "Send OTP",
    description: "Enter your email to receive an OTP.",
  },
  {
    path: ["/auth/match-otp", "/auth/match-otp/"],
    title: "Verify OTP",
    description: "Enter the OTP sent to your registered email.",
  },
  {
    path: ["/auth/forgot-password", "/auth/forgot-password/"],
    title: "Forgot Password",
    description: "Reset your password by entering your email.",
  },
];
const HeadSection: React.FC = () => {
  const { pathname } = useLocation();

  const { title, description } = useMemo(
    () =>
      AUTH_HEADER.find(({ path }) =>
        path.includes(pathname)
      ) as AuthHeaderTypes,
    [pathname]
  );

  return (
    <section>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Typography.Text
          style={{
            fontSize: "2em",
            fontFamily: "Space Mono, monospace",
            textAlign: "center",
            fontWeight: "bold",
            display: "block",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text
          type="secondary"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          {description}
        </Typography.Text>
      </Space>
      <br />
      <br />
      <Alert
        style={{
          textAlign: "center",
          display: "block",
        }}
        message="Please use the following credentials to login."
        type="warning"
      />
      <br />
      <br />
    </section>
  );
};

export default HeadSection;
