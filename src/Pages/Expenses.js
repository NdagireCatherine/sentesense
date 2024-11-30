import Navbar from "../Components/Navbar"
import ExpensesComponent from "../Components/Expenses";
import ProfileDropdown from "../Components/ProfileDropdown";
export default function Expenses() {
    return (
      <div>
        <Navbar/>
        <ExpensesComponent/>
        <ProfileDropdown/>

    
      </div>
    );
  }
