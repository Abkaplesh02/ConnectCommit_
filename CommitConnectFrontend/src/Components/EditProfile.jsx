import axios from "axios";
import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL_EDIT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const EditProfile=({user})=>{


  
    const [firstName,setFirstName]=useState(user.firstName);
    const [lastName,setlastName]=useState(user.lastName);
    const [age,setage]=useState(user.age);
    const [gender,setgender]=useState(user.gender);
    const [about,setAbout]=useState(user.about);
    const [error,setError]=useState("");
    const [photoUrl,setphotoUrl]=useState(user.photoUrl);
    const [showToast,setShowToast]=useState(false);
    const dispatch=useDispatch();

    const saveProfile=async()=>{
        setError("");
        try{
            const res=await axios.patch(BASE_URL_EDIT,{firstName,lastName,age,gender,photoUrl,about},{withCredentials:true});
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            const i=setTimeout(()=>{
                setShowToast(false);
            },3000);
        }
        catch(err){
            setError(err?.response?.data);
        }
    }
        
    
        
    return (
        <> 
     
        <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
            <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center mb-4">Login</h2>
    <div className="">

        <fieldset className="fieldset  my-2">
  <legend className="fieldset-legend ">FirstName</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
 
</fieldset>


 <fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">LastName</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
 
</fieldset>

<fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">age</legend>
  <input type="text" className="input" value={age} onChange={(e)=>setage(e.target.value)}/>
 
</fieldset>

<fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">photoUrl</legend>
  <input type="text" className="input" value={photoUrl} onChange={(e)=>setphotoUrl(e.target.value)}/>
 
</fieldset>


<fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">gender</legend>
  <input type="text" className="input" value={gender} onChange={(e)=>setgender(e.target.value)}/>
 
</fieldset>


<fieldset className="fieldset my-2">
  <legend className="fieldset-legend ">about</legend>
  <input type="text" className="input" value={about} onChange={(e)=>setAbout(e.target.value)}/>
 
</fieldset>
    </div>
    <p className="text-red-800">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
    </div>
  </div>
</div>
        </div>

        <UserCard user={{firstName,lastName,age,gender,photoUrl,about}}/>
    
        </div>

        {
            showToast && <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Data Updated success!!!</span>
  </div>
</div>
        }
           </>
    )
}

export default EditProfile;