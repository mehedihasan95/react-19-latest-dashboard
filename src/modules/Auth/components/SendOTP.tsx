import { Form, FormProps } from "antd";
import React from "react";

import { ForgotPasswordTypes } from "../types/authTypes";
import { FormItemInputUi } from "../../../ui/Form/FormItems";
import { emailValidator } from "../../../utilities/validator";
import Iconify from "../../../configuration/IconifyConfig";
import FormSubmit from "../../../ui/Form/FormSubmit";

const SendOTP: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPasswordTypes>["onFinish"] = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <FormItemInputUi<ForgotPasswordTypes>
        label="Enter Email"
        name="email"
        validator={emailValidator}
        rules={[{ required: true }]}
        componentProps={{
          type: "email",
          placeholder: "e.g: some@example.com",
          prefix: <Iconify icon="ant-design:user-outlined" />,
        }}
      />

      <FormSubmit
        // loading={isLoading}
        name="OTP Send"
        block
      />
    </Form>
  );
};

export default SendOTP;
