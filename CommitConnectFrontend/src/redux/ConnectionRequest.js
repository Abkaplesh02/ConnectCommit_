import { createSlice } from "@reduxjs/toolkit";

const ConnectionRequest=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addConnectionRequests:(state,action)=>{
            return action.payload;
        },
        removeConnectionRequest:(state,action)=>{
            const arr=state.filter((connection)=>(connection._id!=action.payload));
            return arr;
        },
    }
})
export const{addConnectionRequests,removeConnectionRequest}=ConnectionRequest.actions;
export default ConnectionRequest.reducer;