import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import CustomersTable from "./components/table/customersTable";

import NewCustomerDropDown from "./components/newButton/newCustomerDropDown";
import Search from "./components/search";
import BreadCrum from "../../models/breadcrum/breadcrum";
import { breadcrumMembers } from "./breadcrumMembers";

const Customers = () => {
  return (
    <Space className="px-8 py-4 w-full " direction="vertical" size="middle">
      <Title level={1}>Customer's List</Title>
      <BreadCrum members={breadcrumMembers} />
      <Flex justify="space-between" align="center" className="mt-8">
        <NewCustomerDropDown />
        <Search />
      </Flex>
      <CustomersTable />
    </Space>
  );
};
export default Customers;
