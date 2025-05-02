import { RouteObject } from "react-router-dom";
import Dashboard from "../modules/Dashboard/page/Dashboard";
import AccountList from "../modules/Accounts/page/AccountList";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
  name?: string;
  authGuard?: boolean;
};

export const appRoutes: AppRouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    name: "DASHBOARD",
    authGuard: false,
  },
  {
    path: "/accounts",
    name: "ACCOUNTS",
    authGuard: true,
    children: [
      {
        path: "account-list",
        element: <AccountList />,
        name: "ACCOUNTS_ACCOUNT-LIST",
      },
    ],
  },
];
