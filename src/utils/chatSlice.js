import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage :(state,action)=>{
            state.messages.push(action.payload)
            state.messages.splice(0,state.messages.length-OFFSET_LIVE_CHAT);
        }
    }
});

export const {addMessage} =chatSlice.actions;
export default chatSlice.reducer;