import { App, Button, Checkbox, Flex, Form, Input, Typography } from "antd";
<<<<<<< HEAD
=======
// import SocialNetworks from "./SocialNetworks";
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
import { LoginOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { ILoginFields } from "./loginTypes";
import { useAppSelector } from "../../../hooks/hook";
<<<<<<< HEAD
import { selectUsername, setUser } from "../../../feachers/auth/authSlice";
=======
import { selectUsername } from "../../../feachers/auth/authSlice";
// import { patcher } from "../../../store/store";
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
import { useLoginUserMutation } from "../../../services/authAPi/authApi";
import { useNavigate } from "react-router-dom";
import { patcher } from "../../../store/store";
import { ROUTES } from "../../../routes/routesUrls";

const { Title } = Typography;

const Login = () => {
  const [trigger, { data }] = useLoginUserMutation();
<<<<<<< HEAD
  const { message } = App.useApp();
  const navigate = useNavigate();
  // patcher(setUser("jack"));
  // const user = useAppSelector(selectUsername);

=======
  console.log("data", data);
  const { message } = App.useApp();
  // patcher(setUser("jack"));
  const user = useAppSelector(selectUsername);
  console.log("zozo", user);
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
  const [form] = Form.useForm();

  const onFinish = async (values: ILoginFields) => {
    // const payload = {
    //   email: values.email,
    //   password: values.password,
    //   remember: values.remember ? true : false,
    // };
    await trigger({ email: values.email, password: values.password }).then(
<<<<<<< HEAD
      (result) => {
        message.success("login successful");
        patcher(
          setUser({
            name: result.data?.user.name,
            token: result.data?.token,
          })
        );
        navigate(ROUTES.home);
=======
      ({ data }) => {
        if (data) {
          message.success("Login successful");
        }
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754
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

        <Form.Item>
          <Flex justify="space-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link href="#"> Forgot password?</Link>
          </Flex>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          block
          icon={<LoginOutlined />}
          size="large"
        >
          Sign In
        </Button>
      </Form>
    </>
  );
};
export default Login;
