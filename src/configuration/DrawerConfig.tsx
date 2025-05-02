import React from "react";

import { Drawer } from "antd";
import { closeDrawer, DrawerState } from "../app/slice/drawerSlice";
import { useAppDispatch, useAppSelector } from "../app/utilities/hooks";

const DrawerConfig: React.FC = () => {
  const { open, title, content, extra, footer, placement, size, width } =
    useAppSelector(DrawerState);
  const dispatch = useAppDispatch();

  return (
    <Drawer
      onClose={() => dispatch(closeDrawer())}
      open={open}
      title={title}
      children={content}
      extra={extra}
      footer={footer}
      placement={placement}
      size={size}
      width={width}
    />
  );
};

export default DrawerConfig;
