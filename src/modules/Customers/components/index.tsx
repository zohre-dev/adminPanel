import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Flex, Input, Space } from "antd";
import Title from "antd/es/typography/Title";
import CustomersTable from "./table/customersTable";
const Customers = () => {
  //   const { Text } = Typography;
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Customer's List</Title>
      <Breadcrumb
        items={[
          {
            title: <a href="">Dashboard</a>,
          },
          {
            title: `Customer's List`,
          },
        ]}
      />
      <Flex justify="space-between" align="center" className="mt-8">
        <Button ghost type="primary" size="large" className="flex-1/6">
          <PlusOutlined />
          NEW CUSTOMER
        </Button>
        <Input
          size="large"
          placeholder="Search..."
          prefix={<SearchOutlined />}
          className="px-3 flex-2/6"
        />
      </Flex>
      <CustomersTable />
    </Space>
  );
};
export default Customers;
