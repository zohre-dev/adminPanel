import { App, Button, Flex, Form, Image, Input, Space } from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./components/breadcrum/breadcrum";
import { useParams } from "react-router-dom";
import {
  useEditCustomerByIdMutation,
  useGetCustomerByIdQuery,
} from "../../services/customerApi/customerApi";
import { useEffect, useState } from "react";
import { ICustomer } from "../../models/customerType";

const initialFormValues = {
  id: "",
  firstName: "",
  lastName: "",
  idNumber: "",
  birthDayDate: "",
  phoneNumber: "",
  status: "",
  email: "",
};
const EditCustomer = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data } = useGetCustomerByIdQuery(id!);
  const [trigger, { data: dataEditMutation }] = useEditCustomerByIdMutation();
  const [formFields, setFormFields] = useState<ICustomer>(initialFormValues);
  const { firstName } = formFields;

  const onFinish = async (values: ICustomer) => {
    await trigger({
      id: id,
      firstName: values.firstName,
      lastName: values.lastName,
      idNumber: values.idNumber,
      birthDayDate: values.birthDayDate,
      phoneNumber: values.phoneNumber,
      status: values.status,
      email: values.email,
    }).then((result) => {
      if (result.data) message.success("edited successful");
    });
  };
  useEffect(() => {
    if (data) {
      setFormFields({ ...data });
    }
  }, [data]);
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Edit Customer</Title>
      <Breadcrum />
      <Flex justify="space-between" gap={16} className="mt-8 ">
        <Form
          name="validateOnly"
          layout="vertical"
          className="p-4 bg-white rounded-md"
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
            initialValue={firstName}
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
            <Input size="large" className="" />
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

          <Form.Item
            name="birthDayDate"
            label="Birth Day Date"
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
