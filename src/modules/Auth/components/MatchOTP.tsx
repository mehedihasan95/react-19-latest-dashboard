import { Form, FormProps } from "antd";
import React from "react";

import { FormItemInputOTPUi } from "../../../ui/Form/FormItems";
import FormSubmit from "../../../ui/Form/FormSubmit";
import { ForgotPasswordTypes } from "../types/authTypes";

const MatchOTP: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPasswordTypes>["onFinish"] = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <FormItemInputOTPUi<ForgotPasswordTypes>
        name="otp"
        label="Enter OTP"
        rules={[{ required: true }]}
      />
      <FormSubmit
        // loading={isLoading}
        name="Verify OTP"
        block
      />
    </Form>
  );
};

export default MatchOTP;
