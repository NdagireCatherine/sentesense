import HomePage from "../Components/Home";
import Navbar from "../Components/Navbar";
import ProfileDropdown from "../Components/ProfileDropdown";

export default function Home() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
        <ProfileDropdown/>
      </div>
    );
  }