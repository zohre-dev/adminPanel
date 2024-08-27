import { FC, ReactNode } from "react";
import { useOverride } from "./override";
import { ConfigProvider, ThemeConfig, App } from "antd";

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
