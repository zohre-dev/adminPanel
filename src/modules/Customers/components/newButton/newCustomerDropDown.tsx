import { PlusOutlined } from "@ant-design/icons";
import { Dropdown, Button } from "antd";
import { newCustomerDropDownItems } from "./items";

const NewCustomerDropDown = () => {
  return (
    <Dropdown
      className="h-10 text-[#0057FC] border-[#0057FC]"
      menu={newCustomerDropDownItems}
    >
      <Button>
        <PlusOutlined />
        New Customer
      </Button>
    </Dropdown>
  );
};
export default NewCustomerDropDown;
