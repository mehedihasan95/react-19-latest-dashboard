import { message, Modal } from "antd";
import React from "react";

interface ConfirmDialogProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  onConfirm: () => void | Promise<void>;
}

const useConfirmDialog = ({
  title = "Confirm Action",
  content = "Are you sure you want to proceed with this action? This cannot be undone.",
  onConfirm,
}: ConfirmDialogProps): void => {
  Modal.confirm({
    title,
    content,
    maskClosable: true,
    onOk: async () => {
      try {
        await onConfirm?.();
      } catch (error) {
        console.error("Action failed:", error);
        message.error("Operation failed. Please try again.");
      }
    },
  });
};

export default useConfirmDialog;
