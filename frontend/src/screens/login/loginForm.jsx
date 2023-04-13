import React, {useState,setState} from 'react';
import axios from 'axios';
import './style.css'
import { useNavigate } from "react-router-dom";

function LoginForm() {
    
    const [Name, setName] = useState(null);
    const [password,setPassword] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "password"){
            setPassword(value);
        }
       

    }

    const handleSubmit  = () => {
        console.log(Name,password);
        axios.post("http://localhost:8000/auth/login",{"username":Name,"password":password})
        .then(res=>{console.log(res);if(res.status==200)navigate("/Home",{name:Name});})
        .catch(err=>{console.log(err)})
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name">Name </label>
                    <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Name"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Login</button>
            </div>
        </div>
       
    )       
}

export default LoginForm