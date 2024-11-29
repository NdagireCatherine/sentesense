import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import Budgeting from "../Components/Budgeting";

export default function Expenses() {
    return (
      <div>
        <Navbar/>
        <Budgeting/>
      </div>
    );
  }
