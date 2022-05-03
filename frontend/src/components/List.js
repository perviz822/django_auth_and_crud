import Style from '../style/h1.module.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
import style_for_table from  '../style/table.module.css'


const List =()=>{
    const[data,set_data]=useState([]);
 useEffect(()=>{
    let config={
        headers:{
            Authorization: "Bearer"+ " " + localStorage.getItem('access_token')
           
        }
    }

    
    axios.get('http://127.0.0.1:8000/products/',config)
    .then(res=>{
        set_data(res.data.map(element=>

              <tr>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>{element.expiration_date}</td>


              </tr>
       

           


       )); 
    })

 },[])

    return(
        <> 
     
          <table className={style_for_table.table}>
          <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Expiration Date</th>
              </tr>

              {data}
          </table>
          
      
      </>
    )
}


export default List