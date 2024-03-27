import { configureStore } from "@reduxjs/toolkit";
import rootreduser from "./combinereducer";


const store=configureStore({
    reducer:rootreduser
})

export default store;