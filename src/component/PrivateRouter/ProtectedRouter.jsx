import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../Login/Login';


const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
}

function ProtectedRouter() {

    const isAuth = useAuth();

    return (
        isAuth ? <Outlet></Outlet> : <Navigate to={<Login />}></Navigate>
    )
}

export default ProtectedRouter