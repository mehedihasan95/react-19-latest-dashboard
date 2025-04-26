import { Form, FormProps } from "antd";
import React from "react";

import Iconify from "../../../configuration/IconifyConfig";
import { FormItemPasswordUi } from "../../../ui/Form/FormItems";
import FormSubmit from "../../../ui/Form/FormSubmit";
import { passwordValidator } from "../../../utilities/validator";
import { ForgotPasswordTypes } from "../types/authTypes";

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<ForgotPasswordTypes>["onFinish"] = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <FormItemPasswordUi<ForgotPasswordTypes>
        label="New Password"
        name="password"
        validator={passwordValidator}
        rules={[{ required: true }]}
        componentProps={{
          prefix: <Iconify icon="ant-design:lock-outlined" />,
          placeholder: "e.g: ********",
        }}
      />

      <FormItemPasswordUi<ForgotPasswordTypes>
        label="Confirm Password"
        name="confirm_password"
        validator={passwordValidator}
        componentProps={{
          prefix: <Iconify icon="ant-design:lock-outlined" />,
          placeholder: "e.g: ********",
        }}
        dependencies={["password"]}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The confirm password that you entered do not match!")
              );
            },
          }),
        ]}
      />

      <FormSubmit
        // loading={isLoading}
        name="Reset Password"
        block
      />
    </Form>
  );
};

export default ForgotPassword;
