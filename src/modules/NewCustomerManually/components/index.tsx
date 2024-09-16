import {
  App,
  Button,
  DatePicker,
  Flex,
  Form,
  Image,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import SelectFileImage from "../../../assets/img/selectfileimage.png";

import { useCreateCustomerMutation } from "../../../services/customerApi/customerApi";
import { ICustomer } from "../../../models/customerType";
import { useNavigate } from "react-router-dom";
import { dayItems } from "../../../models/days";
import { monthItems } from "../../../models/months";
import BreadCrum from "../../../models/breadcrum/breadcrum";
import { breadcrumMembers } from "../breadcrumMembers";

const NewCustomerManually = () => {
  const [trigger] = useCreateCustomerMutation();
  const { message } = App.useApp();
  const navigate = useNavigate();
  let selectedDay: string = "";
  let selectedMonth: string = "";
  let selectedYear: string | string[] = "";
  let selectedStatus: number = 1;

  const handleYearPickerChange = (dateString: string | string[]) => {
    selectedYear = dateString;
  };
  const handleSelectMonthChange = (value: string) => {
    selectedMonth = value;
  };
  const handleSelectDayChange = (value: string) => {
    selectedDay = value;
  };
  const handleStatusChange = (e: RadioChangeEvent) => {
    selectedStatus = e.target.value;
  };

  const onFinish = async (values: ICustomer) => {
    await trigger({
      firstName: values.firstName,
      lastName: values.lastName,
      idNumber: values.idNumber,
      birthDayDate: `${selectedDay}/${selectedMonth}/${selectedYear}`,
      phoneNumber: values.phoneNumber,
      status: selectedStatus,
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
      <BreadCrum members={breadcrumMembers} />
      <Flex justify="space-between" gap={16} className="mt-8 ">
        <Form
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
            <Radio.Group onChange={handleStatusChange} defaultValue={1}>
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
              <Select
                placeholder="Select Month"
                options={monthItems}
                onChange={handleSelectMonthChange}
              />
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
              <Select
                placeholder="Select Day"
                options={dayItems}
                onChange={handleSelectDayChange}
              />
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
              <DatePicker onChange={handleYearPickerChange} picker="year" />
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
