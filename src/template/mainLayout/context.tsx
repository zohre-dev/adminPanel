import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IContext {
  values: {
    collapsed: boolean;
  };
  dispatch: {
    setCollapsed: Dispatch<SetStateAction<boolean>>;
  };
}

/***************************   create context and set initial values      ******************** */
export const MainLayoutContext = createContext<IContext>({
  values: {
    collapsed: false,
  },
  dispatch: { setCollapsed: () => {} },
});
/**************************************************************************************** */
export const MainLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sharedValues: IContext = {
    values: {
      collapsed: collapsed,
    },
    dispatch: {
      setCollapsed: setCollapsed,
    },
  };

  return (
    <MainLayoutContext.Provider value={sharedValues}>
      {children}
    </MainLayoutContext.Provider>
  );
};
/**************************************************************************************** */
// eslint-disable-next-line react-refresh/only-export-components
export const useMainLayoutContext = () => useContext(MainLayoutContext);
