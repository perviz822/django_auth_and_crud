import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'



function App() {
  return (
    <>
  

   
    <Routes>
      <Route path='/'  element={<Register/>}>  </Route>
      <Route path ='/home/*'      element={<Home/>}/>
      <Route path='/login' element={<Login/>}></Route>
     
    </Routes>
    
    
    </>
  
  );
}

export default App;
