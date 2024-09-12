import {
  App,
  Button,
  Dropdown,
  Flex,
  Form,
  Image,
  Input,
  Space,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import Breadcrum from "./breadcrum/breadcrum";
import SelectFileImage from "../../../assets/img/selectfileimage.png";
import { dropDownDays } from "../../../models/dayDropDownItems";
import { DownOutlined } from "@ant-design/icons";
import { dropDownYears } from "../../../models/yearDropDownItems";
import { dropDownMonths } from "../../../models/monthDropDownItems";
import { useCreateCustomerMutation } from "../../../services/customerApi/customerApi";
import { ICustomer } from "../../../models/customerType";
import { useNavigate } from "react-router-dom";

const NewCustomerManually = () => {
  const { Text } = Typography;
  const [form] = Form.useForm();
  const [trigger] = useCreateCustomerMutation();
  const { message } = App.useApp();
  const navigate = useNavigate();
  const onFinish = async (values: ICustomer) => {
    await trigger({
      firstName: values.firstName,
      lastName: values.lastName,
      idNumber: values.idNumber,
      birthDayDate: values.birthDayDate,
      phoneNumber: values.phoneNumber,
      status: values.status,
      email: values.email,
    }).then((result) => {
      if (result.data) {
        message.success("customer created successfuly");
        navigate("/");
      }
    });
  };
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>New Customer</Title>
      <Breadcrum />
      <Flex justify="space-between" gap={16} className="mt-8 ">
        <Form
          name="validateOnly"
          layout="vertical"
          className="p-4 bg-white rounded-md flex-[60%]"
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
          {/* <Title level={4}>Date Of Birth</Title> 
          <Flex align="center" gap={16}>
            <Form.Item
              name="month"
              label="Month"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Dropdown menu={dropDownMonths}>
                <Space>
                  September
                  <DownOutlined height={20} width={20} />
                </Space>
              </Dropdown>
            </Form.Item>
          
            <Form.Item
              name="day"
              label="Day"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Dropdown menu={dropDownDays}>
                <Space>
                  24
                  <DownOutlined height={20} width={20} />
                </Space>
              </Dropdown>
            </Form.Item>
         
            <Form.Item
              name="year"
              label="Year"
              layout="vertical"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Dropdown menu={dropDownYears}>
                <Space>
                  2023
                  <DownOutlined height={20} width={20} />
                </Space>
              </Dropdown>
            </Form.Item>
          </Flex> */}

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
                CREATE
              </Button>
              <Button type="primary" htmlType="submit" disabled={true}>
                DISCARD CHANGES
              </Button>
              <Button htmlType="reset">CANCEL</Button>
            </Space>
          </Form.Item>
        </Form>
        <Space direction="vertical">
          <Image src={SelectFileImage} className="w-[362px] h-[322px] " />
          <Button block size="large" className="mt-4">
            REPLACE ANOTHER FILE
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default NewCustomerManually;
