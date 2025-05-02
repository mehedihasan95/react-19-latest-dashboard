import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import React, { useMemo } from "react";
import {
  ErrorResponse,
  NavigateFunction,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Iconify from "../../configuration/IconifyConfig";

const ErrorElement: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const error = useRouteError() as ErrorResponse;

  const errorDetails = useMemo(() => {
    const { data, status, statusText } = error || {};
    return {
      status: status as ResultStatusType,
      title: statusText || "An error occurred",
      subTitle: data || "Unable to load the requested page",
    };
  }, [error]);

  const handleGoBack = React.useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Result
        status={errorDetails.status}
        title={errorDetails.title}
        subTitle={errorDetails.subTitle}
        extra={
          <Button
            icon={<Iconify icon="pajamas:go-back" />}
            onClick={handleGoBack}
            type="primary"
            danger
          >
            GO BACK
          </Button>
        }
      />
    </div>
  );
};

export default React.memo(ErrorElement);
