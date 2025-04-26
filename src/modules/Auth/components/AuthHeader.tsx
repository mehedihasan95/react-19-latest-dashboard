import { Typography } from "antd";
import React from "react";

const AuthHeader: React.FC = () => {
  return (
    <React.Fragment>
      <Typography.Text
        style={{
          fontFamily: "Cookie, cursive",
          display: "block",
          textAlign: "center",
          fontSize: "2em",
        }}
      >
        Hotel Reservation360
      </Typography.Text>
    </React.Fragment>
  );
};

export default AuthHeader;
