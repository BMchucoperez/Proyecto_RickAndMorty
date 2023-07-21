import React from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = (props) => {

    const[errors, setErrors] = React.useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
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

    const [userData, setUserData] = React.useState({
        username:'',
        password:''
    })

    return(
        <div className={style.container}>
            
            <div className={style.formulario} >
            <form onSubmit={handleSubmit} >
            <label>Email: </label>
            <input 
            type="text" 
            name="email" 
            value={userData.email}
            onChange={handleChange}
            autoComplete="off" />
            <p className={style.error}>{errors.email && errors.email}</p>
            <hr />

            <label>Password: </label>
            <input 
            type="password" 
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoComplete="off" />
            <p className={style.error}>{errors.password && errors.password}</p>
            <hr />

            <button className={style.button}
            type="submit" >Submit</button>

            </form>
            </div>
        </div>
       
        
    )
}

export default Form;