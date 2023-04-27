import { Navigate, Outlet } from 'react-router-dom';
 

export function ConfirmToken() {
    const token = sessionStorage.getItem("token")

    console.log(token);

     if (!token) {
        return <Navigate to={'/login'} />
    }
    return(
        <Outlet />
    )
} 