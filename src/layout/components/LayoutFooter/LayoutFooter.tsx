import { Col, Flex, Layout, Row, Typography } from "antd";
import React from "react";
import useBreakPoint from "../../../hooks/useBreakPoint";

const LayoutFooter: React.FC = () => {
  const year: number = new Date().getFullYear();
  const { mobile } = useBreakPoint();

  return (
    <Layout.Footer>
      <Row gutter={[10, 10]}>
        <Col span={24} lg={12}>
          <Flex justify={mobile ? "center" : "flex-start"}>
            <Typography.Text>
              Copyright © {year} <strong>M360ICT.</strong> All rights reserved.
            </Typography.Text>
          </Flex>
        </Col>
        <Col span={24} lg={12}>
          <Flex
            justify={mobile ? "center" : "flex-end"}
            gap={mobile ? "middle" : "large"}
          >
            <Typography.Link type="secondary"></Typography.Link>
            <Typography.Link type="secondary"></Typography.Link>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default LayoutFooter;
