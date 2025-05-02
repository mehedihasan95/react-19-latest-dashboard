import { Checkbox, Flex, Form, FormProps } from "antd";
import { sanitizeData } from "nhb-toolbox";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearMessage, setMessage } from "../../../app/slice/authSlice";
import { useAppDispatch } from "../../../app/utilities/hooks";
import Iconify from "../../../configuration/IconifyConfig";
import {
  FormItemInputUi,
  FormItemPasswordUi,
} from "../../../ui/Form/FormItems";
import FormSubmit from "../../../ui/Form/FormSubmit";
import {
  emailValidator,
  passwordValidator,
} from "../../../utilities/validator";
import { useLoginMutation } from "../api/authEndpoint";
import { AuthError, LoginTypes } from "../types/authTypes";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const from: string = state?.from?.pathname || "/";

  const onFinish: FormProps<LoginTypes>["onFinish"] = async (values) => {
    try {
      const data = sanitizeData(values, {
        trimStrings: true,
        keysToIgnore: ["remember"],
      });
      const { success } = await login(data).unwrap();
      if (success) {
        navigate(from, { replace: true });
        dispatch(clearMessage());
      }
    } catch (error) {
      const { status, data } = error as AuthError;
      if (status === "FETCH_ERROR") {
        dispatch(
          setMessage(
            "Due to maintenance, our server is presently unavailable. Please try again later."
          )
        );
      } else {
        dispatch(setMessage(data.message));
      }
    }
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
        loading={isLoading}
        name="Login"
        block
        icon="ant-design:login-outlined"
      />
    </Form>
  );
};

export default Login;
