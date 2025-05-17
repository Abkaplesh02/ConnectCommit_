import axios from "axios";
import { BASE_URL_REQUESTS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionRequests } from "../redux/ConnectionRequest";
import { __DO_NOT_USE__ActionTypes } from "@reduxjs/toolkit";

const ConnectionRequest=()=>{

    const requests=useSelector((store)=>store.requests);

    const dispatch=useDispatch();
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

    if(requests.length===0) return <h1 className="text-bold text-2xl">No Connections Found</h1>
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
                    <button className="mx-2 btn btn-primary">Reject</button>
                   <button className=" mx-2 btn btn-secondary">Accept</button>
                 </div>
                 </div>
)})}
        </div>
    )
}
export default ConnectionRequest;