import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/page/RootLayout";
import Login from "../modules/Auth/pages/Login";
import Auth from "../modules/Auth/pages/Auth";
import SendOTP from "../modules/Auth/components/SendOTP";
import MatchOTP from "../modules/Auth/components/MatchOTP";
import ForgotPassword from "../modules/Auth/components/ForgotPassword";
import PrivateRouter from "./PrivateRouter";
import ErrorElement from "../ui/ErrorElement/ErrorElement";
import Dashboard from "../modules/Dashboard/page/Dashboard";
import { appRoutes } from "./AppRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter children={<RootLayout />} />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      ...appRoutes.map(({ name, path, element, children }) => ({
        name,
        path,
        element,
        children,
      })),
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "send-otp",
        element: <SendOTP />,
      },
      {
        path: "match-otp",
        element: <MatchOTP />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
