import axios from 'axios'
import {useState,useEffect} from 'react'
import useHistory from 'react-router-dom'
import Style from '../style/form.module.css'
import { useNavigate } from 'react-router';

const Register =()=>{
    const history=useNavigate();

    const handleRegister=(e)=>{
        e.preventDefault()
        let data={
            'email':e.target[0].value,
            'password':e.target[1].value
        }

        axios.post('http://127.0.0.1:8000/get_token/',data)
        .then((res)=>{
            if (!res.data.access || !res.data.refresh){
             alert('credentials do not match')}
            else{
                history('/home')

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
export default Register