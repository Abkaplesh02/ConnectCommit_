import axios from "axios";
import { BASE_URL_FEED } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import { useEffect } from "react";
import UserCard from "../Components/UserCard";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Feed=()=>{
    const feed=useSelector((store)=>store.feed);
    const dispatch=useDispatch();
    console.log(feed);
    const navigate=useNavigate();
   
    const getFeed=async()=>{
         if(feed)return;
         try{

             const res=await axios.get(BASE_URL_FEED , {withCredentials:true})
             dispatch(addFeed(res.data));
            }
            catch(err){
                console.log(err.message);
            }
    }

    useEffect(()=>{
        const token=Cookies.get("token");
        console.log(token)
        if(!token){
            navigate("/login",{replace:true});
            return;
        }
        getFeed();
    },[navigate]);

    if(!feed) return ;
    if(feed.length<=0) return <h1 className="text-center my-6 text-bold text-4xl text-gray-500">No new users found</h1>
    return (
       feed && <div className=" flex justify-center my-4">
            <UserCard user={feed[0]}/>
        </div>
    )
}

export default Feed;