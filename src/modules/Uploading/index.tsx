import { Button, Flex, Form, Progress, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Breadcrum from "./components/breadcrum/breadcrum";

const Uploading = () => {
  const [form] = Form.useForm();
  const { Text } = Typography;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Flex align="center" justify="start" gap="small">
        <ArrowLeftOutlined className="w-12 h-12 cursor-pointer" />
        <Title level={1}>New Customer</Title>
      </Flex>

      <Breadcrum />
      <Flex
        vertical
        align="center"
        justify="center"
        gap={32}
        className="mt-8 bg-white py-[148px] rounded-md"
      >
        <Flex
          className="rounded-md border-[1px] border-[#CED4DA] p-8"
          gap="middle"
          align="center"
        >
          <div className="w-[64px] h-[56px] bg-blue-400"></div>

          <Space direction="vertical">
            <Text className="text-[#212529]">
              file-cewkhfrrawdescenidingzoz.txt
            </Text>
            <Text className="text-[#6C757D]">34 KB</Text>
            <Progress percent={30} status="active" />
          </Space>
        </Flex>

        <Title level={2}>Uploading...</Title>

        <Button htmlType="reset" size="large" icon={<CloseOutlined />}>
          CANCEL
        </Button>
      </Flex>
    </Space>
  );
};

export default Uploading;
