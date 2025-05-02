import { Button, Flex, Layout, Space, Typography } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Iconify from "../../../configuration/IconifyConfig";
import BaseButton from "../../../ui/Button/BaseButton";

function greeting(): string {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  }
  if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
}

interface Props {
  mobile?: boolean;
  collapsed: boolean;
  handleCollapsed: () => void;
  handleOpen: () => void;
}
const LayoutHeader: React.FC<Props> = ({
  mobile,
  collapsed,
  handleCollapsed,
  handleOpen,
}) => {
  const [time, setTime] = useState<string>(
    dayjs().format("ddd, DD MMM YYYY hh:mm:ss A")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("ddd, DD MMM YYYY hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout.Header style={{ padding: "0 1rem" }}>
      <Flex justify="space-between" align="center">
        <Space>
          {mobile ? (
            <Button
              onClick={handleOpen}
              icon={<Iconify icon="heroicons-outline:menu-alt-1" />}
              type="primary"
              ghost
            />
          ) : (
            <Button
              onClick={handleCollapsed}
              icon={
                <Iconify
                  icon={
                    collapsed
                      ? "line-md:menu-unfold-right"
                      : "line-md:menu-fold-left"
                  }
                />
              }
              type="primary"
              ghost
            />
          )}
          <Flex vertical>
            <Typography.Text
              style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.2 }}
            >
              {greeting()}
            </Typography.Text>
            <Typography.Text
              type="secondary"
              style={{ fontSize: "0.7rem", lineHeight: 1.2 }}
            >
              {time}
            </Typography.Text>
          </Flex>
        </Space>
        <Space size="middle">
          <BaseButton
            type="default"
            shape="circle"
            icon="heroicons-outline:bell"
          />
          <BaseButton
            type="default"
            shape="circle"
            icon="majesticons:user-line"
          />
        </Space>
      </Flex>
    </Layout.Header>
  );
};

export default LayoutHeader;
