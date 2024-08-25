import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IContext {
  values: {
    collapsed: boolean;
  };
  dispatch: {
    setCollapsed: Dispatch<SetStateAction<boolean>>;
  };
  func: {};
}

/***************************   create context and set initial values      ******************** */
export const mainLayoutContext = createContext<IContext>({
  values: {
    collapsed: false,
  },
  dispatch: { setCollapsed: () => {} },
  func: {},
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
    func: {},
  };

  return (
    <mainLayoutContext.Provider value={sharedValues}>
      {children}
    </mainLayoutContext.Provider>
  );
};
/**************************************************************************************** */
export const useMainLayoutContext = () => {
  return useContext(mainLayoutContext);
};
