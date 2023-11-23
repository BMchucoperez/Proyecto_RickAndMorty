import React from "react";
import validation from "./validation";
import style from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {

    const [errors, setErrors] = React.useState({});
    const [userData, setUserData] = React.useState({
        usuario: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try{
            const response = await axios.get(`http://localhost:3001/user/login?usuario=${userData.usuario}&password=${userData.password}`);
            const { data } = response;
            const { access } = data;
            if(access){
                navigate('/home');
            } else{
                setErrors(true);
            }
        } catch(error){
            console.error(error);
            setErrors(true);
        }
    };

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    };

    return(
        <div className={style.fondo}>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>Welcome to the Rick and Morty App!</h1>
                </div>
                <div className={style.formulario} >
                    <h1>Login</h1>
                    <p>Enter your credentials to access: </p>
                    <form onSubmit={handleSubmit} >
                        <input 
                            type="text" 
                            name="usuario" 
                            value={userData.usuario}
                            onChange={handleChange}
                            placeholder="Username"
                            autoComplete="off" 
                        />
                        <p className={style.error}>
                            {errors.user && errors.user}
                        </p>
                        <input 
                            type="password" 
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            autoComplete="off" 
                        />
                        <p className={style.error}>
                            {errors.password && errors.password}
                        </p>
                        <button className={style.button} type="submit" >
                            Log In
                        </button>
                    </form>
                    <p>Do not you have an account yet? - <Link to="/register">Sign up</Link></p>
                </div>
            </div>
        </div>  
    );
};

export default Form;