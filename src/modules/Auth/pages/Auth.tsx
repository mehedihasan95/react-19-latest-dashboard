import { Card, Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
import useBreakPoint from "../../../hooks/useBreakPoint";
import DotLottie from "../../../ui/DotLottie/DotLottie";
import { auth_lottie_1 } from "../../../utilities/images";
import AuthFooter from "../components/AuthFooter";
import AuthHeader from "../components/AuthHeader";
import { Outlet } from "react-router-dom";
import HeadSection from "../components/HeadSection";
import Typewriter from "../../../ui/Typewriter/Typewriter";
import { useAppSelector } from "../../../app/store";
import { ThemeState } from "../../../app/slice/themeSlice";

const Auth: React.FC = () => {
  const { desktop } = useBreakPoint();
  const { colorPrimary, colorSecondary } = useAppSelector(ThemeState);

  return (
    <React.Fragment>
      <Row style={{ height: "100vh" }}>
        <Col
          span={24}
          lg={12}
          style={{
            display: desktop ? "block" : "none",
            background: colorSecondary,
            padding: "1em",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Space size="large" direction="vertical" align="center">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <DotLottie
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                  }}
                  srcFile={auth_lottie_1}
                />
              </div>
              <Flex vertical>
                <Typography.Text
                  style={{
                    fontSize: "3em",
                    color: "white",
                    textAlign: "center",
                    display: "block",
                    fontFamily: "Oleo Script, system-ui",
                  }}
                >
                  Transform Your Hotel Management with <br />{" "}
                  <Typewriter
                    style={{
                      color: colorPrimary,
                      fontFamily: "Oleo Script, system-ui",
                    }}
                    word={["Simplicity", "Precision", "Intelligence"]}
                  />
                </Typography.Text>
                <Typography.Text
                  style={{
                    textAlign: "center",
                    display: "block",
                    color: "#cccccc",
                  }}
                >
                  Elevate your guest experience with our advanced hotel
                  management system, <br /> seamlessly integrating reservations,
                  operations, and staff coordination
                </Typography.Text>
              </Flex>{" "}
            </Space>
          </div>
        </Col>
        <Col
          span={24}
          lg={12}
          style={{
            display: "grid",
            alignContent: "space-between",
            justifyContent: "center",
            padding: "1em",
          }}
        >
          <AuthHeader />
          <Card
            style={{
              minWidth: "28rem",
              maxWidth: "28rem",
            }}
          >
            <HeadSection />
            <Outlet />
          </Card>
          <AuthFooter />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Auth;
