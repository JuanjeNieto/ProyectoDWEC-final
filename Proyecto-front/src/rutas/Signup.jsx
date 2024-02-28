import React, { useState } from "react";
import Default from "../layout/Default";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constanteAPI";

export default function Signup() {
    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const redirigeLogin = useNavigate();

    async function manejarEnvio(e) {
        e.preventDefault();
    
        try {
            //manejar el envío del formulario
            const response = await fetch(`${API_URL}/signup`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    username,
                    password
                })
            })
            if (response.ok) {
                console.log("usuario creado correctamente")
                setErrorResponse("");
                redirigeLogin("/");
            }
            else {
                console.log("¡Algo va mal...");
                const json = await response.json();
                // Acceder a las propiedades del objeto json
                const error = json.body.error;
                setErrorResponse(error);
              }
              
        } catch (error) {
            console.log(error)
        }
    }
    

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <Default>
        <form className="form" onSubmit={manejarEnvio}>
            <h1>Registrarse</h1>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <label>Nombre</label>
            <input type="text" value={name} 
            onChange={(e) => setName(e.target.value)}/>

            
            <label>Usuario</label>
            <input type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}/>

            <label>Contraseña</label>
            <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

            <button>Registrar cuenta</button>
        </form>
        </Default>
    );
}  