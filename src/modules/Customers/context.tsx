import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface IContext {
  values: {
    searchTerm: string;
  };
  dispatch: {
    setSearchTerm: Dispatch<SetStateAction<string>>;
  };
}

/***************************   create context and set initial values      ******************** */
export const CustomersContext = createContext<IContext>({
  values: {
    searchTerm: "",
  },
  dispatch: {
    setSearchTerm: () => {},
  },
});
/**************************************************************************************** */

export const CustomersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sharedValues: IContext = {
    values: {
      searchTerm: searchTerm,
    },
    dispatch: {
      setSearchTerm: setSearchTerm,
    },
  };
  return (
    <CustomersContext.Provider value={sharedValues}>
      {children}
    </CustomersContext.Provider>
  );
};
/**************************************************************************************** */
export const useCustomerContext = () => useContext(CustomersContext);
