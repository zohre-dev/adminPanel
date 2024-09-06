import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Search = () => {
  return (
    <Input
      size="large"
      placeholder="Search..."
      prefix={<SearchOutlined />}
      className="px-3 flex-2/6"
    />
  );
};
export default Search;
