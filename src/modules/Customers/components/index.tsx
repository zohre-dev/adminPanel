import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Space } from "antd";
import Title from "antd/es/typography/Title";
import CustomersTable from "./table/customersTable";
import BreadCrum from "./breadcrum/breadcrum";
import NewCustomerDropDown from "./new/newCustomerDropDown";
import Search from "./search";
const Customers = () => {
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Customer's List</Title>
      <BreadCrum />
      <Flex justify="space-between" align="center" className="mt-8">
        <NewCustomerDropDown />
        <Search />
      </Flex>
      <CustomersTable />
    </Space>
  );
};
export default Customers;
