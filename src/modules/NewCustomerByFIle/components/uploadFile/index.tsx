import { UploadOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Space, Typography, Upload } from "antd";
import Title from "antd/es/typography/Title";
import UploadFileImage from "../../../../assets/img/uploadfile.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";
import { fileUploadProps } from "./uploadProps";
import { useCustomerByFileContext } from "../../context";
import { UPLOAD } from "../uploadParts";
import { UploadRequestOption } from "rc-upload/lib/interface";
// import { RcFile} from "antd/es/upload";

const UploadFile = () => {
  const { dispatch } = useCustomerByFileContext();
  const { setUploadStep, setSelectedFile } = dispatch;
  const { Text } = Typography;
  const navigate = useNavigate();

  const handleFileUpload = async ({ file }: UploadRequestOption) => {
    // setFileName((file as RcFile).name);
    setSelectedFile(file);
    setUploadStep(UPLOAD.uploading);
  };

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={32}
      className="mt-8 bg-[#CBE4FE] border-4 border-dashed border-[#3F87FD] py-[148px]"
    >
      <Image src={UploadFileImage} width={293.5} height={200} />
      <Space direction="vertical" className="text-center">
        <Title level={2}>Drag and Drop Your File Here!</Title>
        <Text className="text-2xl">
          Please upload
          <Text strong className="text-2xl">
            XLSX
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
        <Upload
          {...fileUploadProps}
          customRequest={handleFileUpload}
          beforeUpload={(file) => {
            // return new Promise((resolve, reject) => {
            //   if (file.size > 5000000) {
            //     reject("file size exceeded");
            //     message.error("file must be less than 5 MB");
            //     setUploadStep(UPLOAD.uploadWrong);
            //   } else {
            //     resolve("success");
            //     // setUploadStep(UPLOAD.uploading);
            //   }
            // });
          }}
        >
          <Button type="primary" size="large" icon={<UploadOutlined />}>
            UPLOAD FILE
          </Button>
        </Upload>
        <Button
          type="primary"
          ghost
          size="large"
          onClick={() => navigate(ROUTES.newCustomer)}
        >
          ENTER DATA MANUALLY
        </Button>
      </Flex>
    </Flex>
  );
};

export default UploadFile;
