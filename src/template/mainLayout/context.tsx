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
    openDrawer: boolean;
  };
  dispatch: {
    setCollapsed: Dispatch<SetStateAction<boolean>>;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  };
}

/***************************   create context and set initial values      ******************** */
export const mainLayoutContext = createContext<IContext>({
  values: {
    collapsed: false,
    openDrawer: false,
  },
  dispatch: { setCollapsed: () => {}, setOpenDrawer: () => {} },
});
/**************************************************************************************** */
export const MainLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const sharedValues: IContext = {
    values: {
      collapsed: collapsed,
      openDrawer: openDrawer,
    },
    dispatch: {
      setCollapsed: setCollapsed,
      setOpenDrawer: setOpenDrawer,
    },
  };

  return (
    <mainLayoutContext.Provider value={sharedValues}>
      {children}
    </mainLayoutContext.Provider>
  );
};
/**************************************************************************************** */
export const useMainLayoutContext = () => useContext(mainLayoutContext);
