import { ConfigProvider, FloatButton, App as MyApp, theme } from "antd";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeState } from "./app/slice/themeSlice";
import { useAppSelector } from "./app/store";
import DrawerConfig from "./configuration/DrawerConfig";
import ModalConfig from "./configuration/ModalConfig";
import NotificationConfig from "./configuration/NotificationConfig";
import useBreakPoint from "./hooks/useBreakPoint";
import router from "./router/route";

const App: React.FC = () => {
  const {
    mode,
    colorPrimary,
    fontFamily,
    fontSize,
    siderBg,
    itemBg,
    headerBg,
    subMenuItemBg,
    itemHoverBg,
  } = useAppSelector(ThemeState);

  const { mobile } = useBreakPoint();

  const isLight: boolean = mode === "light" ? true : false;

  const getAlgorithm = () => {
    if (mobile) {
      return [
        isLight ? theme.defaultAlgorithm : theme.darkAlgorithm,
        theme.compactAlgorithm,
      ];
    }
    return isLight ? theme.defaultAlgorithm : theme.darkAlgorithm;
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: getAlgorithm(),
        token: {
          colorPrimary,
          fontFamily,
          fontSize,
        },
        components: {
          Layout: {
            siderBg,
            headerBg,
            algorithm: true,
          },
          Menu: {
            itemBg,
            subMenuItemBg,
            itemHoverBg,
            algorithm: true,
          },
        },
      }}
    >
      <MyApp>
        <RouterProvider router={router} />
        <NotificationConfig />
        <ModalConfig />
        <DrawerConfig />
        <FloatButton.BackTop />
      </MyApp>
    </ConfigProvider>
  );
};

export default App;
