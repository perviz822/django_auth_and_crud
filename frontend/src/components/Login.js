import axios from 'axios'
import {useState,useEffect} from 'react'
import useHistory from 'react-router-dom'
import Style from '../style/form.module.css'
import { useNavigate } from 'react-router';
import {Link,Route,Routes} from 'react-router-dom'

const Login =()=>{
    const history=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault()
        let data={
            'email':e.target[0].value,
            'password':e.target[1].value
        }

       
        axios.post('http://127.0.0.1:8000/get_token/',data)
        .then((res)=>{
                localStorage.setItem("access_token",res.data.access)
                localStorage.setItem("refresh_token",res.data.refresh)
                history('/home')  
                return res;
        })
        .catch((res)=>{
           if(res.response.status==401){
               alert('Email or password did not match')
           }
        })

    }


return (
    <>
    <form className={Style.form} onSubmit={handleRegister}>
      Email  <input type ='email' />
      Password   <input type='password' />
     <button type='submit'> LOG IN</button>


    </form>
    </>
)
}
export default Login