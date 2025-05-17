import axios from "axios";
import { BASE_URL_REQUESTS, BASE_URL_RESPONSE } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionRequests, removeConnectionRequest } from "../redux/ConnectionRequest";


const ConnectionRequest=()=>{

    const requests=useSelector((store)=>store.requests);

    const dispatch=useDispatch();

    const reviewRequest=async(status,_id)=>{
        try{
            const res=await axios.post(BASE_URL_RESPONSE+status+"/"+_id,{},{withCredentials:true});
            dispatch(removeConnectionRequest(_id));
        }
        catch(err){
            console.log(err.message);
        }
    }

    const fetchRequests =async()=>{
        try{
            const res=await axios.get(BASE_URL_REQUESTS,{withCredentials:true});
            console.log(res);
            dispatch(addConnectionRequests(res?.data?.connectionRequests));
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchRequests();
    },[])

    if(!requests) return;

    if(requests.length===0) return <h1 className="text-center my-6 text-bold text-4xl text-gray-500">No Request Found</h1>
    return (

        <div className=" text-center my-10 w-1/2 mx-auto">
            <h1 className="text-bold text-4xl text-white">Connection Requests</h1>

            { requests.map((request)=>{
                const {firstName,lastName,age,gender,about,photoUrl,_id}=request.fromUserId;
                return(
                <div key={_id} className=" m-4 p-4 border-base-300 bg-base-300 flex justify-evenly items-center">
                    <div>
                    <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl}></img></div>
                    <div className="text-left mx-4">
                <h2 className="font-bold text-xl">{firstName + " "+lastName}</h2>
                <p>{about}</p>
                   {age && gender &&   <p>{age+","+gender}</p>}
                 </div>
                 <div className="flex">
                    <button onClick={()=>reviewRequest("rejected",request._id)} className="mx-2 btn btn-primary">Reject</button>
                   <button  onClick={()=>reviewRequest("accepted",request._id)} className=" mx-2 btn btn-secondary">Accept</button>
                 </div>
                 </div>
)})}
        </div>
    )
}
export default ConnectionRequest;