import { OverrideToken } from "antd/es/theme/interface";

export const useOverride = () => {
  const lightThemeComponents = {
    Table: {
      headerBg: "transparent",
    },
  };

  return {
    lightThemeComponents,
  };
};
