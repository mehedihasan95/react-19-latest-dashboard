import { ThemeStateType } from "../slice/themeSlice";

export const themePresets: ThemeStateType[] = [
  {
    mode: "light",
    name: "Default",
    headerBg: "#FFFFFF",
    siderBg: "#210F37",
    itemBg: "#210F37",
    colorPrimary: "#328E6E",
    colorSecondary: "#705C53",
    colorText: "#f2f2f2",
    subMenuItemBg: "rgba(0, 0, 0, 0.5)",
    itemHoverBg: "rgba(0, 0, 0, 0.5)",
  },
  {
    mode: "dark",
    name: "Dark",
    siderBg: "#1F1F1F",
    headerBg: "#1F1F1F",
    itemBg: "#1F1F1F",
    colorText: "#d9d9d9",
    subMenuItemBg: "rgba(0, 0, 0, 0.5)",
    itemHoverBg: "rgba(0, 0, 0, 0.5)",
  },
];
export const primaryColors: { label: string; value: string }[] = [
  { label: "Turquoise", value: "#1abc9c" },
  { label: "Emerald", value: "#2ecc71" },
  { label: "Peter River", value: "#3498db" },
  { label: "Amethyst", value: "#9b59b6" },
  { label: "Alizarin", value: "#e74c3c" },
  { label: "Orange", value: "#f39c12" },
  { label: "Pumpkin", value: "#d35400" },
  { label: "Pomegranate", value: "#c0392b" },
];

export const fontSizes: { label: string; value: number }[] = Array.from(
  { length: 6 },
  (_, i) => {
    const size = 13 + i;
    return {
      label: `${size}${size === 14 ? " (Default)" : ""}`,
      value: size,
    };
  }
);

export const fontFamilies: { label: string; value: string }[] = [
  {
    label: "Inter (Default)",
    value: "Inter, sans-serif",
  },
];
