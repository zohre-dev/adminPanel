import { App, Button, Checkbox, Flex, Form, Input, Typography } from "antd";

import { LoginOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { ILoginFields } from "./loginTypes";
import { useLoginUserMutation } from "../../../services/authAPi/authApi";
import { useNavigate } from "react-router-dom";
import { patcher } from "../../../store/store";
import { ROUTES } from "../../../routes/routesUrls";

import { setUser } from "../../../feachers/auth/authSlice";
import { useState } from "react";

const { Title } = Typography;

const Login = () => {
  const [rememberChecked, setRememberChecked] = useState<boolean>(false);
  const [trigger, { data }] = useLoginUserMutation();
  const { message } = App.useApp();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = async (values: ILoginFields) => {
    await trigger({ email: values.email, password: values.password }).then(
      (result) => {
        if (result.data) {
          message.success("login successful");
          patcher(
            setUser({
              name: result.data?.user.name,
              token: result.data?.token,
              rememberChecked: rememberChecked,
            })
          );
          navigate(ROUTES.home);
        }
      }
    );
  };
  return (
    <>
      <Form
        name="signIn"
        form={form}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Title level={2} className="text-center">
          Sign In
        </Title>
        {/* <SocialNetworks /> */}
        <div className="text-center mb-2.5">
          or use your <Link href="#">account</Link>
        </div>
        <Form.Item
          name="email"
          label="Email address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
            {
              type: "email",
              message: "Your email is invalid.",
            },
          ]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="w-full"
          rules={[
            {
              required: true,
              message: "Please input your password.",
            },
            { min: 6, message: "Password must be minimum 6 characters." },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Flex justify="space-between" className="py-3">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox
              checked={rememberChecked}
              onChange={(e) => setRememberChecked(e.target.checked)}
            >
              Remember me
            </Checkbox>
          </Form.Item>

          <Link href="#"> Forgot password?</Link>
        </Flex>

        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          block
          icon={<LoginOutlined />}
          size="large"
          className="mt-2"
        >
          Sign In
        </Button>
      </Form>
    </>
  );
};
export default Login;
