import { CloseOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Progress, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useCustomerByFileContext } from "../../context";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SelectedFileImage from "../../../../assets/img/selectfileimage.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";
import { uploadUrls } from "../../../../services/uploadApi/urls";
import * as XLSX from "xlsx";
import { ICustomerPayload } from "../../../../models/customerType";
import {
  useCreateCustomerMutation,
  useGetAllCustomersQuery,
  useLazyFindCustomerQuery,
} from "../../../../services/customerApi/customerApi";
import dayjs from "dayjs";

const Uploading = () => {
  const navigate = useNavigate();
  const { values } = useCustomerByFileContext();
  const { selectedFile } = values;

  const [progress, setProgress] = useState<number | undefined>();
  const { refetch } = useGetAllCustomersQuery("");
  const [trigger] = useCreateCustomerMutation();
  const [findCustomer] = useLazyFindCustomerQuery();

  const { Text } = Typography;
  const controller = new AbortController();

  const handleFileUpload = useCallback(async () => {
    if (!selectedFile) return;

    let reader = new FileReader();
    reader.onload = async (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: "binary",
        cellDates: true,
        cellText: false,
      });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, {
        dateNF: "dd-mm-yyyy",
      }) as ICustomerPayload[];

      function formatDate(date: Date) {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join("/");
      }

      const newdata = json.map((item) => ({
        ...item,
        birthDayDate: dayjs(item.birthDayDate).format("DD/MM/YYYY"),
      }));
      console.log("newdata", newdata);
      newdata.map(
        async (record) =>
          await findCustomer(record).then(async (result) => {
            if (result.data?.length! === 0) await trigger(record);
          })
      );
    };
    reader.readAsArrayBuffer(selectedFile);
    // refetch();
    const formData = new FormData();
    formData.append("file", selectedFile);

    await axios
      .post(uploadUrls.upload, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Api-Key": "742b50b4-c744-40fd-a0fc-e72c7c85fbbb",
        },
        signal: controller.signal,
        onUploadProgress: (progressEvent) => {
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
        if (response.status === 200) {
          // setProgress(0);
          refetch();
          navigate(ROUTES.home);
        }
      });
  }, [selectedFile]);

  useEffect(() => {
    handleFileUpload();
  }, [handleFileUpload]);
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
          <Text className="text-[#212529]">
            {selectedFile && selectedFile.name}
          </Text>
          <Text className="text-[#6C757D]">
            {selectedFile && selectedFile.size} KB
          </Text>
          {progress !== undefined && (
            <Progress percent={progress} status="active" />
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
