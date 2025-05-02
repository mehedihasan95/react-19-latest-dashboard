import { Alert, Space, Typography } from "antd";
import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AuthState, clearMessage } from "../../../app/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app/utilities/hooks";

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
  const { message } = useAppSelector(AuthState);
  const dispatch = useAppDispatch();

  const { title, description } = useMemo(
    () =>
      AUTH_HEADER.find(({ path }) =>
        path.includes(pathname)
      ) as AuthHeaderTypes,
    [pathname]
  );

  useEffect(() => {
    if (!message) return;
    const timer: number = setTimeout(() => {
      dispatch(clearMessage());
    }, 10000);
    return () => clearTimeout(timer);
  }, [message, dispatch]);

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
      {message && (
        <Alert
          style={{
            textAlign: "center",
            display: "block",
            color: "red",
          }}
          message={message}
          type="error"
        />
      )}
      <br />
      <br />
    </section>
  );
};

export default HeadSection;
