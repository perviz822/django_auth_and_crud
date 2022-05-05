import  {Routes,Route,Link} from 'react-router-dom'
import Style from '../style/Home.module.css'
import List from './List';
import Update from './Update';
import Delete from './Delete';
import Retrieve from './Retrieve';
import Create from './Create'
import { useState } from 'react';
import Post_list from './Post_list';
import Post from './Post';


const Home =()=>{
  const[changed,set_changed]= useState(false)

   return (
       <>
       <header className={Style.header}>
         <li>  <Link className={Style.link} to='home/list'>List of Products</Link>      </li>
         <li>  <Link className={Style.link} to='home/update'>Update Product</Link>      </li>
         <li>  <Link className={Style.link} to='home/retrieve'>Retrieve Product</Link>  </li>
         <li>  <Link className={Style.link} to='home/delete'>Delete Product</Link>      </li>
         <li>  <Link className={Style.link} to='home/create'>Create Product</Link>      </li>
         <li>  <Link className={Style.link} to='home/post_list'>List of your posts</Link></li>
         <li>  <Link className={Style.link} to='home/post'>Post</Link></li>
       </header>

       <Routes>
      <Route path ='home/list'      element={<List/>}/>
      <Route path ='home/update'    element={<Update/>}/>
      <Route path ='home/delete'    element={<Delete/>}/>
      <Route path ='home/retrieve'  element={<Retrieve/>}/>
      <Route path ='home/create'    element={<Create/>} />
      <Route path='home/post_list' element={<Post_list/>} ></Route>
      <Route path='home/post' element={<Post/>} ></Route>

       </Routes>
       </>

       
   )
}
export default Home;