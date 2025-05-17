import axios from "axios";
import { BASE_URL_CONNECTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/connectionSlice";

const Connections=()=>{

    const connections=useSelector((store)=>store.connections);

    const dispatch=useDispatch();
    const fetchConnections=async(req,res)=>{
        try{
            const res=await axios.get(BASE_URL_CONNECTIONS,{withCredentials:true});
            dispatch(addConnections(res?.data?.data));

        }
        catch(err){ 
            console.log(err.message);
    }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    if(!connections) return;

    if(connections.length===0) return <h1 className="text-bold text-2xl">No Connections Found</h1>
    return (

        <div className=" text-center my-10 w-1/2 mx-auto">
            <h1 className="text-bold text-4xl text-white">Connections</h1>

            { connections.map((connection)=>{
                const {firstName,lastName,age,gender,about,photoUrl,_id}=connection;
                return(
                <div key={_id} className="m-4 p-4 border-base-300 bg-base-300 flex">
                    <div>
                    <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl}></img></div>
                    <div className="text-left mx-4">
                <h2 className="font-bold text-xl">{firstName + " "+lastName}</h2>
                <p>{about}</p>
                   {age && gender &&   <p>{age+","+gender}</p>}
                 </div>
                 </div>
)})}
        </div>
    )
}

export default Connections;