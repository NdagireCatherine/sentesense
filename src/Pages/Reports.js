import React from 'react';
import Navbar from "../Components/Navbar";
import App from "../Components/Reports";
import Repo from '../Components/Reports_2';

export default function Expenses() {
    return(
        <div>
           <Navbar/>
           <Repo/>
           <App/>
        </div>
    )
  }