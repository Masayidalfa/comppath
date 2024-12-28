/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ token, children }) => {
  return token ? children : <Navigate to="/login" />;
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return (
    <PrivateRoute token={token}>
      {children} {/* Render children secara langsung */}
    </PrivateRoute>
  );
};

export default ProtectedRoute;
