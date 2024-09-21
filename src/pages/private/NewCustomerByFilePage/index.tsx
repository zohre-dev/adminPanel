import NewCustomerByFile from "../../../modules/NewCustomerByFIle";
import { CustomerByFileProvider } from "../../../modules/NewCustomerByFIle/context";

const NewCustomerByFilePage = () => {
  return (
    <CustomerByFileProvider>
      <NewCustomerByFile />
    </CustomerByFileProvider>
  );
};
export default NewCustomerByFilePage;
