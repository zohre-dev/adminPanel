import { Button, Flex, Form, Image, Input, Space } from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./components/breadcrum/breadcrum";

const EditCustomer = () => {
  const [form] = Form.useForm();
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Edit Customer</Title>
      <Breadcrum />
      <Flex justify="space-between" gap={16} className="mt-8 ">
        <Form
          name="validateOnly"
          layout="vertical"
          className="p-4 bg-white rounded-md"
        >
          <Form.Item
            name="firstName"
            label="First Name"
            layout="vertical"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium text-sm mb-8"
          >
            <Input size="large" className="" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            layout="vertical"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium text-sm"
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            layout="vertical"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium text-sm"
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            layout="vertical"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium text-sm"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" disabled={true}>
                EDIT
              </Button>
              <Button type="primary" htmlType="submit" disabled={true}>
                DISCARD CHANGES
              </Button>
              <Button htmlType="reset">CANCEL</Button>
            </Space>
          </Form.Item>
        </Form>
        <Space direction="vertical">
          {/* <Image src="././././assets/img/selectfileimage.png" /> */}
          <div className="w-[362px] h-[322px] bg-red-400"></div>
          <Button block size="large" className="mt-4">
            REPLACE ANOTHER FILE
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default EditCustomer;
