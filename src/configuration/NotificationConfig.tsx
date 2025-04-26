import { notification } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import {
  clearNotification,
  NotificationState,
} from "../app/slice/notificationSlice";

const NotificationConfig: React.FC = () => {
  const { type, description, placement } = useAppSelector(NotificationState);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (description && type) {
      const message = {
        success: "Success!",
        error: "Error occurred",
        warning: "Warning",
        info: "Info",
      }[type];

      api[type]({
        message,
        description,
        placement,
      });

      dispatch(clearNotification());
    }
  }, [type, description, placement, api, dispatch]);

  return <React.Fragment>{contextHolder}</React.Fragment>;
};

export default NotificationConfig;
