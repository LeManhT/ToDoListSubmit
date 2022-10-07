import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import FormLogin from '../Login/FormLogin';


const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
}

function ProtectedRouter() {

    const isAuth = useAuth();

    return (
        isAuth ? <Outlet></Outlet> : <Navigate to={<FormLogin />}></Navigate>
    )
}

export default ProtectedRouter