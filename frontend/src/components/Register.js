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
            'user_name':e.target[1].value,
            'first_name':e.target[2].value,
            'password':e.target[3].value
        }

        axios.post('http://127.0.0.1:8000/create_user/',data)
        .then(()=>{
            history('/login')
        })

    }


return (
    <>
    <form className={Style.form} onSubmit={handleRegister}>
      Email  <input type ='email' />
      User Name  <input type= 'text' />
      First Name <input type='text'/>
      Password   <input type='password' />

     
      <button type='submit'> REGISTER</button>

    </form>
    </>
)
}
export default Register