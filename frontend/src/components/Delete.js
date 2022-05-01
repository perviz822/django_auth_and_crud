import Style from '../style/h1.module.css'
import axios from 'axios'
import Style2 from '../style/form.module.css'

const Delete =()=>{


    const deleteData=(event)=>{
        event.preventDefault();
        axios.delete('http://127.0.0.1:8000/delete/', {data:{'id':event.target[0].value}})
    }
    return(
        <> 
        <form className={Style2.form} onSubmit={deleteData}>
            <input placeholder="Enter the id to be deleted"/>
            <button type='submit'> DELETE</button>
        </form>
        </>
    )
}


export default Delete;


