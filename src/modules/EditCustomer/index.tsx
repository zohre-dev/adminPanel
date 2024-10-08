import {
  App,
  Button,
  DatePicker,
  Flex,
  Form,
  Image,
  Input,
  Radio,
  Select,
  Space,
} from "antd";

import Title from "antd/es/typography/Title";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditCustomerByIdMutation,
  useGetAllCustomersQuery,
  useLazyGetCustomerByIdQuery,
} from "../../services/customerApi/customerApi";
import { useEffect } from "react";
import { ICustomer } from "../../models/customerType";
import SelectFileImage from "../../assets/img/selectfileimage.png";
import { monthItems } from "../../models/months";
import { dayItems } from "../../models/days";
import dayjs, { Dayjs } from "dayjs";
import BreadCrum from "../../models/breadcrum/breadcrum";
import { breadcrumMembers } from "./breadcrumMembers";

const EditCustomer = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const { id } = useParams();
  const [triggerGetCustomerById, { data }] = useLazyGetCustomerByIdQuery();
  const [trigger] = useEditCustomerByIdMutation();
  const { refetch } = useGetAllCustomersQuery("");
  const navigate = useNavigate();

  const onFinish = async (values: ICustomer) => {
    await trigger({
      id: id,
      firstName: values.firstName,
      lastName: values.lastName,
      idNumber: values.idNumber,
      birthDayDate: `${values.day}/${values.month}/${(
        values.year as Dayjs
      ).format("YYYY")}`,
      phoneNumber: values.phoneNumber,
      status: values.status,
      email: values.email,
    }).then((result) => {
      if (result.data) message.success("edited successful");
      form.resetFields();
      refetch();

      navigate("/");
    });
  };
  useEffect(() => {
    if (data) {
      const newData = { ...data, year: dayjs(`${data.year}/01/01`) };
      form.setFieldsValue(newData);
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      triggerGetCustomerById(id, false);
    }
  }, [id]);

  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Edit Customer</Title>
      <BreadCrum members={breadcrumMembers} />
      <Flex justify="space-between" gap={16} className="mt-8 ">
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          className="p-4 bg-white rounded-md flex-[1]"
          onFinish={onFinish}
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
            name="lastName"
            label="Last Name"
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
            name="status"
            label="Status"
            layout="vertical"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium text-sm mb-8"
          >
            <Radio.Group>
              <Radio value={1}>Approved</Radio>
              <Radio value={2}>Rejected</Radio>
              <Radio value={3}>Blocked</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="idNumber"
            label="ID Number"
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

          <Title level={4}>Date Of Birth</Title>
          <Flex align="center" gap={16} className="w-full">
            <Form.Item
              className="flex-[1]"
              name="month"
              label="Month"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Month" options={monthItems} />
            </Form.Item>

            <Form.Item
              className="flex-[1]"
              name="day"
              label="Day"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Day" options={dayItems} />
            </Form.Item>

            <Form.Item
              className="flex-[1]"
              name="year"
              label="Year"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker picker="year" />
            </Form.Item>
          </Flex>

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
              <Button type="primary" htmlType="submit">
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
          <Image src={SelectFileImage} className="w-[362px] h-[322px] " />
          <Button block size="large" className="mt-4">
            REPLACE ANOTHER FILE
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default EditCustomer;
