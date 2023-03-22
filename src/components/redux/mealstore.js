import { configureStore } from "@reduxjs/toolkit";
import mealreducer from './mealslice';
export const meaelstore = configureStore({
    reducer:{
        data:mealreducer,
    }
})

