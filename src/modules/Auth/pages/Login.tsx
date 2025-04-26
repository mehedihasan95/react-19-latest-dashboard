import { Checkbox, Flex, Form, FormProps } from "antd";
import React from "react";
import {
  FormItemInputUi,
  FormItemPasswordUi,
} from "../../../ui/Form/FormItems";
import { LoginTypes } from "../types/authTypes";
import Iconify from "../../../configuration/IconifyConfig";
import {
  emailValidator,
  passwordValidator,
} from "../../../utilities/validator";
import FormSubmit from "../../../ui/Form/FormSubmit";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<LoginTypes>["onFinish"] = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ remember: true }}
    >
      <FormItemInputUi<LoginTypes>
        name="email"
        validator={emailValidator}
        componentProps={{
          type: "email",
          placeholder: "e.g: some@example.com",
          prefix: <Iconify icon="ant-design:user-outlined" />,
        }}
      />
      <FormItemPasswordUi<LoginTypes>
        name="password"
        validator={passwordValidator}
        componentProps={{
          prefix: <Iconify icon="ant-design:lock-outlined" />,
          placeholder: "e.g: ********",
        }}
      />

      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "1rem" }}
      >
        <Form.Item<LoginTypes> name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="/auth/send-otp">Forgot Password!</Link>
      </Flex>
      <FormSubmit
        // loading={isLoading}
        name="Login"
        block
        icon="ant-design:login-outlined"
      />
    </Form>
  );
};

export default Login;
