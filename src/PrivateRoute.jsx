import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthcontextProvider';



const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    
  return  isAuth ? children : <Navigate to = "/login"/>

};

export default PrivateRoute
