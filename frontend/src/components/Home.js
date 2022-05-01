import  {Routes,Route,Link} from 'react-router-dom'
import Style from '../style/Home.module.css'

const Home =()=>{

   return (
       <>
       <header className={Style.header}>
         <li>  <Link className={Style.link} to='/list'>List of Products</Link>      </li>
         <li>  <Link className={Style.link} to='/update'>Update Product</Link>      </li>
         <li>  <Link className={Style.link} to='/retrieve'>Retrieve Product</Link>  </li>
         <li>  <Link className={Style.link} to='/delete'>Delete Product</Link>      </li>
         <li>  <Link className={Style.link} to='/create'>Create Product</Link>      </li>

       </header>
       </>
   )
}
export default Home;