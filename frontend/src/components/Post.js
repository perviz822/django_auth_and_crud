import axios from 'axios'
import {useState,useEffect} from 'react'
import useHistory from 'react-router-dom'
import Style from '../style/form.module.css'
import { useNavigate } from 'react-router';
import {Link,Route,Routes} from 'react-router-dom'

const Post =()=>{
  
    
 

 const handlePost= (e)=>{
    let access_token=localStorage.getItem('access_token')
    console.log(access_token)
     e.preventDefault()
     console.log("hi")
      let  data={
          'content':e.target[0].value
      } 

       let token=localStorage.getItem('refresh_token')
       let config={
           headers:{
               Authorization: "Bearer"+ " " + access_token  
             }
            }
   
       axios.post('http://127.0.0.1:8000/post_content/',data,config)
       .then(res=>{   
           console.log(res)    
          return res
       })
       .catch((res)=>{
           if(res.response.status==401){
             console.log("catched")
              axios.post('http://127.0.0.1:8000/get_refresh_token/',{refresh:token})
              .then((response)=>{
                localStorage.setItem('access_token',response.data.access)
                 handlePost(e);
              })
           }
       })
   
   
   
       
 }
  
return (
    <>
    <form className={Style.form} onSubmit={handlePost}>
      A NOTE  <input type='text' />
     <button type='submit'> Post  a note</button>


    </form>
    </>
)
}
export default Post