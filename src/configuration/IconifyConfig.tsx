import { Icon, IconProps } from "@iconify/react";
import React from "react";

interface IconifyConfigurationProps extends Omit<IconProps, "icon"> {
  icon: string;
}

const Iconify: React.FC<IconifyConfigurationProps> = React.memo(
  ({ icon, style, ...props }) => (
    <Icon
      icon={icon}
      inline={true}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    />
  )
);

export default Iconify;
