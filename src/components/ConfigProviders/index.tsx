import { FC, ReactNode } from "react";
import { useOverride } from "./override";
<<<<<<< HEAD
import { App, ConfigProvider, ThemeConfig } from "antd";
=======
import { ConfigProvider, ThemeConfig, App } from "antd";
>>>>>>> 2dbf5ca4e740edc69e165c2350cf05616ccf9754

interface Iprops {
  children: ReactNode;
}

export const ConfigProviders: FC<Iprops> = ({ children }) => {
  // {
  //   lightThemeComponents:{
  //   Table: {
  //     headerBg: "transparent",
  //   }
  // }
  // }
  const { lightThemeComponents } = useOverride();

  // const antdTheme: ThemeConfig = {
  //   components: {
  //     Button: {},
  //     Table: {
  //       headerBg: "transparent",
  //     },
  //   },
  // };
  const antdTheme: ThemeConfig = {
    components: lightThemeComponents,
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
