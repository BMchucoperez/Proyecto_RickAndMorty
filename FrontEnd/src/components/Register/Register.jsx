import React, {useState} from "react";
import style from "./Register.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [userData, setUserData] = useState({
        usuario: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!userData.usuario || userData.usuario.trim() === '') {
            // Manejo de error si el campo usuario está vacío o es undefined
            console.error('El campo usuario está vacío o es inválido');
            return;
        }
        try{
            const response = await axios.post('http://localhost:3001/user/create', {
                usuario: userData.usuario,
                password: userData.password
            });
            console.log(response.data);
        } catch(error){
            console.error(error);
            setError(true);
        }
    };

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    return(
        <div className={style.fondo}>
            <div className={style.container}>
                <h1>Create Account</h1>
                <p>Create your account to access: </p>
                <div className={style.formulario}>
                    <form onSubmit={handleSubmit}>
                    <input type="text" name="usuario" id="usuario" placeholder="Username" autoComplete="off" value={userData.usuario} onChange={handleChange}/>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                    <input type="text" name="password" id="password" placeholder="Password" autoComplete="off" value={userData.password} onChange={handleChange}/>
                    <br />
                    <button type="submit">Register</button>
                    {error && <p className={`${style.error} ${style.escondido}`}>Error al registrarse</p>}
                    </form>
                    <p>Are you already registered? - <Link to="/">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;