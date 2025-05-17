import axios from "axios";
import { BASE_URL_Interest } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../redux/feedSlice";

const UserCard=({user})=>{
  
    const {firstName,lastName,photoUrl,age,gender,about,_id}=user;
    const dispatch=useDispatch();

    const handleRequest=async(status,userId)=>{
      try{
        const res=await axios.post(BASE_URL_Interest+status+"/"+userId,{},{withCredentials:true});
        dispatch(removeFeed(userId));
      }
      catch(err){
        console.log(err.message);
      }
    }

    return (

        <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
   { age && gender &&  <p>{age + ","+gender}</p> }
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
         <button onClick={()=>handleRequest("ignored",_id)} className="btn btn-primary">Ignore</button>
      <button onClick={()=>handleRequest("interested",_id)} className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    )
}

export default UserCard;