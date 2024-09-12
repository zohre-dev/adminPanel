import { Menu } from "antd";
import { OverrideToken } from "antd/es/theme/interface";

export const useOverride = () => {
  const lightThemeComponents: OverrideToken = {
    Table: {
      headerBg: "transparent",
    },
    Menu: {
      darkItemSelectedBg: "#343A40",
    },
  };

  return {
    lightThemeComponents,
  };
};
