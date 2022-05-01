import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home'
import {Routes,Route} from 'react-router-dom'
import List from './components/List';
import Update from './components/Update';
import Delete from './components/Delete';
import Retrieve from './components/Retrieve';
import Create from '../src/components/Create'

function App() {
  return (
    <>
    <Home></Home>
    <Routes>
      <Route path ='/list'      element={<List/>}/>
      <Route path ='/update'    element={<Update/>}/>
      <Route path ='/delete'    element={<Delete/>}/>
      <Route path ='/retrieve'  element={<Retrieve/>}/>
      <Route path ='/create'    element={<Create/>}/>
    </Routes>
    
    
    </>
  
  );
}

export default App;
