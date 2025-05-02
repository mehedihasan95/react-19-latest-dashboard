import { Button, ButtonProps } from "antd";
import React from "react";
import Iconify from "../../configuration/IconifyConfig";

interface Props extends ButtonProps {
  name?: string;
  icon?: string;
  type?: "link" | "text" | "default" | "primary" | "dashed";
  iconWidth?: number;
}

const BaseButton: React.FC<Props> = ({
  name,
  icon,
  type = "primary",
  iconWidth,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      type={type}
      icon={icon && <Iconify icon={icon} width={iconWidth} />}
    >
      {name}
    </Button>
  );
};

export default BaseButton;
