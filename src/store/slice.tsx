import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HDNodeWallet } from "ethers";

interface UserAccountInterface  {
    acc:HDNodeWallet | null,
    password:string | null
}

interface AddAccountPayload{
    acc:HDNodeWallet
}

let UserAccountState: UserAccountInterface = {
    acc: null,
    password: null
}

export const UserAccSlice = createSlice({
    name:"userAcc",
    initialState:UserAccountState,
    reducers:{
        setAccount:(state, action:PayloadAction<AddAccountPayload>)=>{
            state.acc = action.payload.acc;
        },
        setNewPassword:(state, action:PayloadAction<{password:string}>)=>{
            state.password = action.payload.password
        },
        removeAccount:(state, _action)=>{
            state.acc = null;
            state.password = null;
        },
    }
})

export const {
    setAccount,
    removeAccount,
    setNewPassword
} = UserAccSlice.actions;

export default UserAccSlice.reducer