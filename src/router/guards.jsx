import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const AuthGuard = ({ component }) => {
    const isAuthorized = true;
  
    if (!isAuthorized) {
      return <Navigate to="/login" replace={true} />;
    }
  
    return component;
  };

  AuthGuard.propTypes = {
    component: PropTypes.element
  }
  
  export default AuthGuard;

