import Navbar from "../Components/Navbar"
import IncomeTracker from "../Components/IncomeTracker";
import ProfileDropdown from "../Components/ProfileDropdown";
export default function Income() {
    return (
      <div>
        <Navbar/>
        <IncomeTracker/>
        <ProfileDropdown/>
      </div>
    );
  }