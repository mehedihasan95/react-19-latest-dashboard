import { Badge, Flex, Typography } from "antd";
import React from "react";
import Iconify from "../../../configuration/IconifyConfig";

const DisplayProfile: React.FC = () => {
  return (
    <Flex vertical>
      <Typography.Text style={{ color: "#f2f2f2", fontSize: "1rem" }}>
        Mehedi Hasan
      </Typography.Text>
      <Flex align="center" gap={5}>
        <Iconify icon="iconoir:send-mail-solid" color="#bfbfbf" />
        <Typography.Text style={{ color: "#bfbfbf", fontSize: "0.7rem" }}>
          mehedihasan.m360ict@gmail.com
        </Typography.Text>
      </Flex>
      <Badge status="success" text="admin" style={{ color: "#A0C878" }} />
    </Flex>
  );
};

export default DisplayProfile;
