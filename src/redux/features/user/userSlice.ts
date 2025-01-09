import { createSlice, nanoid } from "@reduxjs/toolkit";
import { TUser } from "./user.interface";
import { RootState } from "../../store";

type TInitialUser = {
    users: TUser[];
}

const initialState: TInitialUser = {
    users: [
        {
            id:"dkfd",
            name:"Mosharof Hossen"
        },
        {
            id:"dfkfd",
            name:"Limon Hossen"
        },
    ]
}

const createUser = ((userData: { name: string }): TUser => {
    return { id: nanoid(), ...userData }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(createUser(action.payload));
        }
    }
})

export const userList = (state: RootState) => {
    return state.users.users
}

export const {addUser} = userSlice.actions

export const userReducer = userSlice.reducer;