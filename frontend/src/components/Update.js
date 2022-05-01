import Style from '../style/h1.module.css'
import style_for_form from '../style/form.module.css'
import axios from 'axios'

const Update =()=>{
const UpdateData=(event)=>{
    event.preventDefault();
     let data= {
        'id':event.target[0].value,
        'name':event.target[1].value,
        'price':event.target[2].value,
        'expiration_date':event.target[3].value
    }
    axios.post('http://127.0.0.1:8000/update/', data)
}
    return(
        <> 
        <form  onSubmit={UpdateData} className={style_for_form.form}>
          Id <input name='id' placeholder='Enter the id of the product to be updated'/>  
          Name  <input name='name'/>
          Price <input name='price'/>
          Expiration Date <input name='expiration_date'/>
         <button  type="submit"> ADD</button>
        </form>
        </>
    )
}


export default Update