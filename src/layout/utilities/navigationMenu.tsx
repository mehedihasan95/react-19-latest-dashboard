import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import Iconify from "../../configuration/IconifyConfig";

export type NavigationItem = {
  icon: string;
  label: string;
  to?: string;
  name?: string;
  children?: NavigationItem[];
};

const icons = { create: "pajamas:todo-add", list: "typcn:th-list" };

export const navigationMenu: NavigationItem[] = [
  {
    to: "/accounts",
    label: "Accounts",
    icon: "hugeicons:user-account",
    children: [
      {
        to: "/accounts/account-list",
        label: "Account List",
        name: "ACCOUNTS_ACCOUNT-LIST",
        icon: icons.list,
      },
    ],
  },

  {
    to: "/booking-support",
    label: "Booking Support",
    icon: "material-symbols:support",
    name: "BOOKING-SUPPORT",
  },
];

export const renderMenuItem = (
  item: NavigationItem
): Required<MenuProps>["items"][number] => ({
  key: item.to as string,
  label: item.children ? (
    item.label
  ) : (
    <NavLink
      title={item.label}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
        };
      }}
      to={String(item.to)}
    >
      {item.label}
    </NavLink>
  ),
  icon: <Iconify icon={item.icon} />,
  ...(item.children && { children: item.children.map(renderMenuItem) }),
  type: "item",
});
