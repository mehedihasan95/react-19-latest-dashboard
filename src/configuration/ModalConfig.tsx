import React from "react";
import { Modal, Typography } from "antd";
import { closeModal, ModalState } from "../app/slice/modalSlice";
import { useAppDispatch, useAppSelector } from "../app/utilities/hooks";

const ModalConfig: React.FC = () => {
  const { open, title, content, width } = useAppSelector(ModalState);
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={open}
      onCancel={() => dispatch(closeModal())}
      onOk={() => dispatch(closeModal())}
      width={width}
      footer={null}
      title={
        <Typography.Paragraph strong style={{ fontSize: "1rem" }}>
          {title || "CONTENT TITLE"}
        </Typography.Paragraph>
      }
      children={content || <>NO CONTENT</>}
    />
  );
};

export default ModalConfig;
