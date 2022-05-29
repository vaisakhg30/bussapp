import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addbus from './component/Addbus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbus from './component/Viewbus';
import Searchbus from './component/Searchbus';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
<Route path='/' exact element={<Addbus/>}/>
<Route path='/view' exact element={<Viewbus/>}/>
<Route path='/search' exact element={<Searchbus/>}/>

      
    </Routes>
    
    
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
