import { createSlice } from "@reduxjs/toolkit";

const ConnectionRequest=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addConnectionRequests:(state,action)=>{
            return action.payload;
        },
        removeConnectionRequest:(state,action)=>{
            return null;
        },
    }
})
export const{addConnectionRequests,removeConnectionRequest}=ConnectionRequest.actions;
export default ConnectionRequest.reducer;