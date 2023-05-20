import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";


const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <Spinner aria-label="Default status example" />
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children
};

export default PrivateRouter;


