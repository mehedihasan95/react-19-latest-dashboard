import React from "react";
import { Tag as AntdTag, TagProps } from "antd";

interface Props extends TagProps {
  name: React.ReactNode;
  capitalize?: boolean;
}

const Tag: React.FC<Props> = ({ name, capitalize, ...rest }) => {
  return (
    <AntdTag
      bordered={false}
      {...rest}
      style={{ textTransform: capitalize ? "capitalize" : "uppercase" }}
    >
      {name}
    </AntdTag>
  );
};

export default Tag;
