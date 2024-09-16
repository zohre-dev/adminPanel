import { Button, Flex, Form, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import BreadCrum from "../../models/breadcrum/breadcrum";
import { breadcrumMembers } from "./breadcrumMembers";

const NewCustomerByFile = () => {
  const [form] = Form.useForm();
  const { Text } = Typography;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Flex align="center" justify="start" gap="small">
        <ArrowLeftOutlined className="w-12 h-12 cursor-pointer" />
        <Title level={1}>New Customer</Title>
      </Flex>

      <BreadCrum members={breadcrumMembers} />
      <Flex
        vertical
        align="center"
        justify="center"
        gap={32}
        className="mt-8 bg-[#CBE4FE] border-4 border-dashed border-[#3F87FD] py-[148px]"
      >
        <div className="w-[293.5px] h-[200px] bg-green-400"></div>
        <Space direction="vertical" className="text-center">
          <Title level={2}>Drag and Drop Your File Here!</Title>
          <Text className="text-2xl">
            Please upload
            <Text strong className="text-2xl">
              {" "}
              XLSX{" "}
            </Text>
            files
          </Text>
          <Text className="text-2xl">
            A file maximum szie should be{" "}
            <Text strong className="text-2xl">
              5 MB
            </Text>
          </Text>
        </Space>
        <Flex gap="small" justify="center" align="center">
          <Button type="primary" size="large">
            <UploadOutlined />
            UPLOAD FILE
          </Button>
          <Button type="primary" ghost size="large">
            ENTER DATA MANUALLY
          </Button>
        </Flex>
      </Flex>
    </Space>
  );
};

export default NewCustomerByFile;
