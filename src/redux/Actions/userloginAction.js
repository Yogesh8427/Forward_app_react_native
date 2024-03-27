import store from "../store"
import { userlogin,userlogout } from "../Reducers/loginreducer"

export  const getlogin=(value)=>{
    store.dispatch(userlogin(value));
}

export const getlogout=(value)=>{
    store.dispatch(userlogout(value));
}