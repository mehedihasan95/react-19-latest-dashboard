import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/page/RootLayout";
import Login from "../modules/Auth/pages/Login";
import Auth from "../modules/Auth/pages/Auth";
import SendOTP from "../modules/Auth/components/SendOTP";
import MatchOTP from "../modules/Auth/components/MatchOTP";
import ForgotPassword from "../modules/Auth/components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
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
