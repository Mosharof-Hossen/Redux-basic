import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "./task.interface";
import { RootState } from "../../store";
import { v4 as uuidv4 } from 'uuid';

type InitialState = {
    tasks: TTask[],
    filter: "High" | "Medium" | "Low" | "ALL"
}

const initialState: InitialState = {
    tasks: [],
    filter: 'ALL'
}

type TDraftTask = Pick<TTask, 'title' | "description" | "dueDate" | "priority">;
const createTask = (taskData: TDraftTask): TTask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TDraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todos.tasks
}

export const { addTask } = taskSlice.actions

export const taskReducer = taskSlice.reducer;