import { useDispatch, useSelector } from "react-redux";
import LogoPic from "../assets/StackSpark.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL_Logout } from "../utils/constants";
import { removeUser } from "../redux/userSlice";
const Navbar=()=>{
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL_Logout,{},{withCredentials:true});
      dispatch(removeUser());
      navigate("/login");
    }
    catch(err){
      console.log(err.message);
    }
  }
    return (
        <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1 items-center">
    <Link to="/" className="btn btn-ghost text-xl">StackSpark👨‍💻</Link>
  </div>
  <div className="flex gap-2">
   {user &&
    <div className="dropdown dropdown-end mx-5 flex ">
      <p className="p-4">Welcome, {user.firstName}</p>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between" >
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">Connections</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
        }
  </div>
</div>
    )
}

export default Navbar;