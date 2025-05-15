import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login=()=>{

    const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogin=async()=>{
        try{
            const res=await axios.post(BASE_URL,{emailId,password},{withCredentials:true});
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch(err){
            console.log(err.message);
        }
    }
    return(

        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center mb-4">Login</h2>
    <div className="">

        <fieldset className="fieldset  my-2">
  <legend className="fieldset-legend ">Email ID</legend>
  <input type="text" className="input" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
 
</fieldset>


 <fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">Password</legend>
  <input type="text" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
 
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Login;