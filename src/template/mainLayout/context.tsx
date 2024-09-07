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
    openNotificationDrawer: boolean;
    openCommentsDrawer: boolean;
  };
  dispatch: {
    setCollapsed: Dispatch<SetStateAction<boolean>>;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;
    setOpenNotificationDrawer: Dispatch<SetStateAction<boolean>>;
    setOpenCommentsDrawer: Dispatch<SetStateAction<boolean>>;
  };
}

/***************************   create context and set initial values      ******************** */
export const MainLayoutContext = createContext<IContext>({
  values: {
    collapsed: false,
    openDrawer: false,
    openNotificationDrawer: false,
    openCommentsDrawer: false,
  },

  dispatch: {
    setCollapsed: () => {},
    setOpenDrawer: () => {},
    setOpenNotificationDrawer: () => {},
    setOpenCommentsDrawer: () => {},
  },
});
/**************************************************************************************** */
export const MainLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openNotificationDrawer, setOpenNotificationDrawer] =
    useState<boolean>(false);
  const [openCommentsDrawer, setOpenCommentsDrawer] = useState<boolean>(false);
  useState<boolean>(false);

  const sharedValues: IContext = {
    values: {
      collapsed: collapsed,
      openDrawer: openDrawer,
      openNotificationDrawer: openNotificationDrawer,
      openCommentsDrawer: openCommentsDrawer,
    },
    dispatch: {
      setCollapsed: setCollapsed,
      setOpenDrawer: setOpenDrawer,
      setOpenNotificationDrawer: setOpenNotificationDrawer,
      setOpenCommentsDrawer: setOpenCommentsDrawer,
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
