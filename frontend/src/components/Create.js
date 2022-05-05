import Style from '../style/h1.module.css'
import style_for_form from '../style/form.module.css'
import axios from 'axios'

const Create =(props)=>{

const createData=(event)=>{
    event.preventDefault();
     let data= {
        'name':event.target[0].value,
        'price':event.target[1].value,
        'expiration_date':event.target[2].value
    }
    axios.post('http://127.0.0.1:8000/create/', data).then((res)=>{
        return res

    })
    .catch((res)=>{
        props.set_changed()

    })
}
    return(
        <> 
        <form  onSubmit={createData} className={style_for_form.form}>
          Name  <input name='name'/>
          Price <input name='price'/>
          Expiration Date <input name='expiration_date'/>
         <button  type="submit"> ADD</button>
        </form>
        </>
    )
}


export default Create