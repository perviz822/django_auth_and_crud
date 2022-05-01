import Style from '../style/h1.module.css'
import axios from 'axios'
import Style2 from '../style/form.module.css'
import Style3 from '../style/table.module.css'
import { useState } from 'react'

const Retrieve =()=>{
    const [data,set_data]=useState({content:{},isLoaded:false});
   

    const RetrieveData=(event)=>{
        event.preventDefault();
        
     let request_data={
        'id':event.target[0].value
    }
   
        axios.post('http://127.0.0.1:8000/retrieve/', request_data )
        .then(res=>{
          return res.data
        })
        .then(data=>{
            console.log(data)
            set_data(
                {
                  content:
                      <tr>
               <td>{data.name}</td>
               <td>{data.price}</td>
               <td>{data.expiration_date}</td>
      
                      </tr>,
      
                  isLoaded:true    
                }
                  )
        }
          
      
        )
    }
    return(
        <> 
        <form className={Style2.form} onSubmit={RetrieveData}>
            <input placeholder="Enter the id to be retrieved"/>
            <button type='submit'> Retrieve</button>
        </form>



        {data.isLoaded && <table className={Style3.table}>
          <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Expiration date</th>
          </tr>

          {data.content}
            
            
            </table>}
        </>
    )
}


export default Retrieve;


