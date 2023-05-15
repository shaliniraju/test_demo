
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import CodeForInterview from './components/CodeForInterview';
import EditUser from './components/EditUser';

import {BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    
  <BrowserRouter> 
    <NavBar/>
      <Routes>
        <Route path ='/' element ={<CodeForInterview/>}/>
        <Route path='/add' element ={<AddUser/>}/>
        <Route path='/all' element = {<AllUser/>}/>
        <Route path='/edit/:id' element = {<EditUser/>}/>
        
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
