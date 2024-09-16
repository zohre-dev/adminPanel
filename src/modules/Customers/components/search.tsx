import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useCustomerContext } from "../context";

const Search = () => {
  const { values, dispatch } = useCustomerContext();
  const { searchTerm } = values;
  const { setSearchTerm } = dispatch;
  return (
    <Input
      size="large"
      placeholder="Search..."
      prefix={<SearchOutlined />}
      className="px-3 flex-[0_0_30%]"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
export default Search;
