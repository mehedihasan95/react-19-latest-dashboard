import { Drawer, Layout } from "antd";
import React, { useEffect } from "react";
import { ThemeState } from "../../../app/slice/themeSlice";
import LayoutMenu from "../LayoutMenu/LayoutMenu";
import useBreakPoint from "../../../hooks/useBreakPoint";
import { useAppSelector } from "../../../app/utilities/hooks";
import BottomSection from "../LayoutMenu/BottomSection";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  siderWidth: number;
  collapsed: boolean;
}

const LayoutDrawer: React.FC<Props> = ({
  open,
  setOpen,
  siderWidth,
  collapsed,
}) => {
  const { desktop } = useBreakPoint();
  const { siderBg } = useAppSelector(ThemeState);

  useEffect(() => {
    if (desktop) setOpen(false);
  }, [desktop, setOpen]);

  return (
    <Drawer
      placement="left"
      onClose={() => setOpen(false)}
      open={open}
      footer={null}
      width={siderWidth}
      closable={false}
      styles={{
        content: { background: siderBg },
        body: {
          padding: 0,
          display: "grid",
          alignContent: "space-between",
          scrollbarWidth: "thin",
        },
      }}
    >
      <Layout.Sider width={"100%"} collapsed={false}>
        <LayoutMenu collapsed={collapsed} />
      </Layout.Sider>
      <BottomSection collapsed={collapsed} />
    </Drawer>
  );
};

export default LayoutDrawer;
