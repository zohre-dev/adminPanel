import { CloseOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Progress, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useCustomerByFileContext } from "../../context";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectedFileImage from "../../../../assets/img/selectfileimage.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";
import { uploadUrls } from "../../../../services/uploadApi/urls";

const Uploading = () => {
  const navigate = useNavigate();
  const { values } = useCustomerByFileContext();
  const { selectedFile, fileName } = values;
  console.log("selectedFile", selectedFile);
  const [progress, setProgress] = useState<number | undefined>();

  const { Text } = Typography;

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    await axios
      .post("https://api.pdfrest.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Api-Key": "742b50b4-c744-40fd-a0fc-e72c7c85fbbb",
        },
        onUploadProgress: (progressEvent) => {
          // const { loaded, total } = progressEvent;
          // let percent = Math.floor((loaded * 100) / (total || 0));
          // console.log("percent", percent);
          // console.log(`${loaded}kb of ${total}kb | ${percent}%`);
          // if (percent < 100) {
          //   setProgress(percent);
          // }
          const uploaded = progressEvent.loaded;
          const currentPercent = Math.floor(
            (uploaded / (progressEvent.total || 0)) * 100
          );
          if (currentPercent < 100) {
            setProgress(currentPercent);
          }
        },
      })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          // setProgress(0);
          navigate(ROUTES.home);
        }
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
          <Text className="text-[#6C757D]">
            {selectedFile && selectedFile.size} KB
          </Text>
          {progress && <Progress percent={progress} status="active" />}
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
