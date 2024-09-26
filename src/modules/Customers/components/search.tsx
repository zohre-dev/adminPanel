import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useCustomerContext } from "../context";
import _ from "lodash";

const Search = () => {
  const { values, dispatch } = useCustomerContext();
  const { searchTerm } = values;
  const { setSearchTerm } = dispatch;
  const debounced_fun = _.debounce(
    function (value: string) {
      setSearchTerm(value);
    },
    300,
    { leading: true, trailing: true }
  );
  return (
    <Input
      size="large"
      placeholder="Search..."
      prefix={<SearchOutlined />}
      className="px-3 flex-[0_0_30%]"
      value={searchTerm}
      onChange={(e) => debounced_fun(e.target.value)}
    />
  );
};
export default Search;
