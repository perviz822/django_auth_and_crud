import  {Routes,Route,Link} from 'react-router-dom'
import Style from '../style/Home.module.css'
import List from './List';
import Update from './Update';
import Delete from './Delete';
import Retrieve from './Retrieve';
import Create from './Create'




const Home =()=>{

   return (
       <>
       <header className={Style.header}>
         <li>  <Link className={Style.link} to='home/list'>List of Products</Link>      </li>
         <li>  <Link className={Style.link} to='home/update'>Update Product</Link>      </li>
         <li>  <Link className={Style.link} to='home/retrieve'>Retrieve Product</Link>  </li>
         <li>  <Link className={Style.link} to='home/delete'>Delete Product</Link>      </li>
         <li>  <Link className={Style.link} to='home/create'>Create Product</Link>      </li>
       </header>



       <Routes>
      <Route path ='home/list'      element={<List/>}/>
      <Route path ='home/update'    element={<Update/>}/>
      <Route path ='home/delete'    element={<Delete/>}/>
      <Route path ='home/retrieve'  element={<Retrieve/>}/>
      <Route path ='home/create'    element={<Create/>}/>
   
       </Routes>
       </>

       
   )
}
export default Home;