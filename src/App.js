import logo from './logo.svg';
import './App.css';
import Meals from './components/meals/meals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mealdetails from './components/mealdetails/mealdetails';
import Mealpurchase from './components/purchase/purchase';

function App() {
  
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Meals/>}/>
      <Route path='/details' element={<Mealdetails/>}/>
      <Route path='/purchase' element={<Mealpurchase/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
