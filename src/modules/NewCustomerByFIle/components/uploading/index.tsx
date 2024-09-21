import { CloseOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Progress, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useCustomerByFileContext } from "../../context";
import { useEffect } from "react";
import axios from "axios";
import SelectedFileImage from "../../../../assets/img/selectfileimage.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";

const Uploading = () => {
  const navigate = useNavigate();
  const { values, dispatch } = useCustomerByFileContext();
  const { progress, selectedFile, fileName } = values;
  const { setProgress, setUploadStep, setSelectedFile } = dispatch;

  const { Text } = Typography;

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    await axios
      .post("https://file.io", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          setProgress(event.progress);
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) navigate(ROUTES.home);
      });
  };
  useEffect(() => {
    if (selectedFile) {
      handleFileUpload();
    }
  }, []);
  return (
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
        <Image src={SelectedFileImage} width={64} height={56} />
        <Space direction="vertical">
          <Text className="text-[#212529]">{fileName && fileName}</Text>
          <Text className="text-[#6C757D]">34 KB</Text>
          {progress && (
            <Progress percent={Math.ceil(progress * 100)} status="active" />
          )}
        </Space>
      </Flex>

      <Title level={2}>Uploading...</Title>

      <Button htmlType="reset" size="large" icon={<CloseOutlined />}>
        CANCEL
      </Button>
    </Flex>
  );
};

export default Uploading;
