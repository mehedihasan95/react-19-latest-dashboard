import { Segmented } from "antd";
import React, { useCallback } from "react";
import { ThemeState, toggleTheme } from "../../../app/slice/themeSlice";
import { useAppDispatch, useAppSelector } from "../../../app/utilities/hooks";
import { themePresets } from "../../../app/utilities/theme";
import Iconify from "../../../configuration/IconifyConfig";

interface Props {
  collapsed: boolean;
}

const BottomSection: React.FC<Props> = React.memo(({ collapsed }) => {
  const { mode } = useAppSelector(ThemeState);
  const dispatch = useAppDispatch();

  const handleThemeChange = useCallback(() => {
    dispatch(toggleTheme(mode === "light" ? themePresets[1] : themePresets[0]));
  }, [dispatch, mode]);

  return (
    <section style={{ padding: "1rem" }}>
      <Segmented
        onChange={handleThemeChange}
        block
        vertical={collapsed}
        shape={collapsed ? "default" : "round"}
        options={[
          {
            label: collapsed ? "" : "Light",
            value: "light",
            icon: <Iconify icon="material-symbols:light-mode" />,
          },
          {
            label: collapsed ? "" : "Dark",
            value: "dark",
            icon: <Iconify icon="material-symbols:dark-mode" />,
          },
        ]}
      />
    </section>
  );
});

BottomSection.displayName = "BottomSection";

export default BottomSection;
