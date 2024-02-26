import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Swal from 'sweetalert2'



const PrivateRoute = () => {
    const navigate = useNavigate();
    const aut = false; //autirozar o no aturizar entrada a la page

    useEffect(() => {
        if (!aut) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No estas Autorizado a ingresar",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/")
        }
    }, [aut])
    return <Outlet />
}

export default PrivateRoute;