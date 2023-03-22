import { createSlice } from "@reduxjs/toolkit";
let newstate = {
    name:"",
    id:""
  }
export const mealslice = createSlice({
    name:"meals",
    initialState:newstate,
    reducers:{
        addcart:(state,{payload})=>{
            console.log(state,payload.name);
            return {...state,id:payload.id,name:payload.name}
        }
    }
})

export const {addcart} = mealslice.actions;

export default mealslice.reducer;