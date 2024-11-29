import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Income from './Pages/Income'
import Expenses from './Pages/Expenses'
import Budgeting from './Pages/Budgeting'

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Income" element={<Income/>}/>
          <Route path="/Expenses" element={<Expenses/>}/>
          <Route path="/Budgeting" element={<Budgeting/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
