import { Typography } from "antd";
import React from "react";

const AuthFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <Typography.Text
        style={{ display: "block", textAlign: "center" }}
        type="secondary"
      >
        © {year} Hotel Reservation360. All rights reserved.
      </Typography.Text>
    </React.Fragment>
  );
};

export default AuthFooter;
