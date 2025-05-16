import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {  BASE_URL_PROFILE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useEffect } from "react";
import axios from "axios";

const Body=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userData=useSelector((store)=>store.user);
    const fetchUser=async()=>{
        if(userData) return;
        try{

            const user=await axios.get(BASE_URL_PROFILE ,{withCredentials:true});
            dispatch(addUser(user.data));
            console.log(user.data);
        }
        catch(err){
            if(err.status==401){
                navigate("/login");
            }
            console.log(err.message);
        }
    }

    useEffect(()=>{
        if(!userData){    
            fetchUser();
        }
    },[])

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </div>
    )
}

export default Body;