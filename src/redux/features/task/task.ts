import { createSlice } from "@reduxjs/toolkit";
import { TTask } from "./task.interface";

type InitialState = {
    task: TTask[]
}

const initialState: InitialState = {
    task: [{
        id: "01",
        title: "This is title",
        description: "This is description.",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High"
    }]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const taskReducer = taskSlice.reducer;