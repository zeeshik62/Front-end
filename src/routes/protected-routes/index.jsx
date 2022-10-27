import { sls, routes, memoryStrings } from "../../utils";
import { useLocation, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const location = useLocation();
  let token = sls.decode(memoryStrings.authorization);

  if (!token) {
    return <Navigate to={routes.usersCard} state={{ from: location }} />;
  }
};
export default ProtectedRoutes;
