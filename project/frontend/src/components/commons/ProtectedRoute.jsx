import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import {get_current_user, get_me} from "../../services/userServices";

const ProtectedRoute = () => {
    const auth = get_current_user()
    return auth ? <Outlet/> : <Navigate to="/login"/>;
}


export default ProtectedRoute;