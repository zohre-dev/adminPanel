import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import BreadCrum from "../../models/breadcrum/breadcrum";
import { breadcrumMembers } from "./breadcrumMembers";
import UploadFile from "./components/uploadFile";
import UploadWrong from "./components/uploadWrong";
import Uploading from "./components/uploading";
import { useCustomerByFileContext } from "./context";
import { UPLOAD } from "./components/uploadParts";

const NewCustomerByFile = () => {
  const { values } = useCustomerByFileContext();
  const { uploadStep } = values;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Flex align="center" justify="start" gap="small">
        <ArrowLeftOutlined className="w-12 h-12 cursor-pointer" />
        <Title level={1}>New Customer</Title>
      </Flex>
      <BreadCrum members={breadcrumMembers} />
      {uploadStep === UPLOAD.selectFile && <UploadFile />}
      {uploadStep === UPLOAD.uploading && <Uploading />}
      {uploadStep === UPLOAD.uploadWrong && <UploadWrong />}
    </Space>
  );
};

export default NewCustomerByFile;
