import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL_Login, BASE_URL_REGISTER } from "../utils/constants";

const Login=()=>{

    const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [isLogin,setIsLogin]=useState(true);
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const toggleLoginForm=()=>{
      setIsLogin(!isLogin);
    }

    const handleLogin=async()=>{
        try{
              const res=await axios.post(BASE_URL_Login,{emailId,password},{withCredentials:true});
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch(err){
          setError(err?.response?.s || "Something went wrong");
            console.log(err.message);
        }
    }

    const handleSignUp=async()=>{
      try{
        const data={
                firstName,
                lastName,
                emailId,
                password,
              }
              const res=await axios.post(BASE_URL_REGISTER,data,{withCredentials:true});
              dispatch(addUser(res.data));
              navigate("/profile");
      }
      catch(err){
        console.log(err.message);
      }
    }
    return(

        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center mb-4">{isLogin?"Login":"Sign Up"}</h2>
    <div className="">

    {!isLogin &&    <fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">First Name</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
 
</fieldset>}

{!isLogin &&  <fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">Last Name</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
 
</fieldset>}

        <fieldset className="fieldset  my-2">
  <legend className="fieldset-legend ">Email ID</legend>
  <input type="text" className="input" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
 
</fieldset>


 <fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">Password</legend>
  <input type="text" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
 
</fieldset>

<h1 onClick={toggleLoginForm} className="text-gray-400 mt-4 mb-2 cursor-pointer">{isLogin? "New to StackSpark ? Sign up now":"Already a user ? Login now"} </h1>
    </div>
    <p className="text-red-800">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={isLogin?handleLogin:handleSignUp}>{isLogin?"Login":"Register"}</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Login;