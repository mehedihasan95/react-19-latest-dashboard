import { Avatar, Flex, Popover } from "antd";
import React from "react";
import DisplayProfile from "./DisplayProfile";
import { ThemeState } from "../../../app/slice/themeSlice";
import { useAppSelector } from "../../../app/utilities/hooks";

interface Props {
  collapsed: boolean;
}

const TopSection: React.FC<Props> = ({ collapsed }) => {
  const { siderBg } = useAppSelector(ThemeState);

  return (
    <section
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/af/5a/33/af5a33cd0caaec862960469ec82d9749.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          minHeight: collapsed ? "5rem" : "10rem",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "grid",
          alignContent: collapsed ? "center" : "end",
          placeItems: collapsed ? "center" : "start",
          padding: collapsed ? "0.5rem" : "1rem",
        }}
      >
        <Flex vertical gap={10}>
          <Popover
            content={<DisplayProfile />}
            placement="rightTop"
            styles={{ body: { background: siderBg } }}
          >
            <Avatar
              src="https://i.pinimg.com/736x/77/ed/04/77ed04de57277c01bd9e0362a7b92a17.jpg"
              alt="Avater"
              size="large"
              style={{
                pointerEvents: collapsed ? "auto" : "none",
                cursor: collapsed ? "pointer" : "default",
              }}
            />
          </Popover>
          {!collapsed && <DisplayProfile />}
        </Flex>
      </div>
    </section>
  );
};

export default TopSection;
