import { createSlice } from "@reduxjs/toolkit";
import { TTask } from "./task.interface";
import { RootState } from "../../store";

type InitialState = {
    tasks: TTask[]
}

const initialState: InitialState = {
    tasks: [
        {
            id: "01",
            title: "This is title",
            description: "This is description.",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "02",
            title: "This is title",
            description: "This is description.",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium"
        },
        {
            id: "03",
            title: "This is title",
            description: "This is description.",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low"
        },
    ]
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
    return state.todos.tasks
}
export const taskReducer = taskSlice.reducer;