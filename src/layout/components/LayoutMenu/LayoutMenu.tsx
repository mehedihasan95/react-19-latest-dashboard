import { Menu } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import { navigationMenu, renderMenuItem } from "../../utilities/navigationMenu";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

interface Props {
  collapsed: boolean;
  tablet?: boolean;
}
const LayoutMenu: React.FC<Props> = ({ collapsed, tablet }) => {
  const location = useLocation();

  return (
    <section
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <section>
        <TopSection collapsed={collapsed} />

        <Menu
          mode="inline"
          items={[
            {
              to: "/",
              label: "Dashboard",
              icon: "ic:round-space-dashboard",
            },
            ...navigationMenu,
          ].map(renderMenuItem)}
          selectedKeys={[location.pathname]}
        />
      </section>
      {tablet && <BottomSection collapsed={collapsed} />}
    </section>
  );
};

export default LayoutMenu;
