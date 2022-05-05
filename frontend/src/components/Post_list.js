import Style from '../style/h1.module.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
import style_for_table from  '../style/table.module.css'
const Post_list =(props)=>{
   
    const[data,set_data]=useState([]);
    const[access_token,set_access_token]= useState(localStorage.getItem('access_token'))
    console.log(access_token)
 useEffect(()=>{
    let token=localStorage.getItem('refresh_token')
    let config={
        headers:{
            Authorization: "Bearer"+ " " + access_token  
          }
         }

    axios.get('http://127.0.0.1:8000/get_your_posts/',config)
    .then(res=>{
        set_data(res.data.map(element=>
            <div>
                {element.content}
            </div>
             ),
                )
       return res
    })
    .catch((res)=>{
        if(res.response.status==401){
           axios.post('http://127.0.0.1:8000/get_refresh_token/',{refresh:token})
           .then((response)=>{
             localStorage.setItem('access_token',response.data.access)
              set_access_token(response.data.access)
           })
        }
    })

 },[access_token])

    return(
        <> 
        <div>
            {data}
        </div>
      </>
    )
   }
export default Post_list