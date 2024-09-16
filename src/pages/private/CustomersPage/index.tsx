import Customers from "../../../modules/Customers";
import { CustomersProvider } from "../../../modules/Customers/context";

const CustomersPage = () => {
  return (
    <CustomersProvider>
      <Customers />
    </CustomersProvider>
  );
};
export default CustomersPage;
