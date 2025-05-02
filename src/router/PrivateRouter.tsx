import { Navigate, useLocation } from "react-router-dom";
import { AuthState } from "../app/slice/authSlice";
import { useAppSelector } from "../app/utilities/hooks";
import Loader from "../ui/Loading/Loader";
import { useGetProfileQuery } from "../modules/Settings/api/profileEndpoint";

interface Props {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { token } = useAppSelector(AuthState);
  const { isLoading, isSuccess } = useGetProfileQuery(undefined, {
    skip: !token,
  });
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  } else if (isSuccess && token) {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
