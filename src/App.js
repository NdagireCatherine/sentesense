import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Income from './Pages/Income'
import Expenses from './Pages/Expenses'
import Budgeting from './Pages/Budgeting'
import Reports from './Pages/Reports'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashoard'


export default function App(){
  const appStyle = {
    backgroundImage: "url('https://github.com/NdagireCatherine/sentesense/blob/master/trend.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "white", // Optional: Ensures text is readable
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };


  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Income" element={<Income/>}/>
          <Route path="/Expenses" element={<Expenses/>}/>
          <Route path="/Budgeting" element={<Budgeting/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
