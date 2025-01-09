import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "./task.interface";
import { RootState } from "../../store";

type InitialState = {
    tasks: TTask[],
    filter: "High" | "Medium" | "Low" | "ALL",
    selectedTask: TTask | null
}

const initialState: InitialState = {
    tasks: [
        {
            id: "sFoe2cRnGfG_16u8sCMWu",
            isCompleted: false,
            title: "This is title one",
            description: "this is description",
            priority: "High",
            dueDate: "2025-01-20T18:00:00.000Z",
        },
        {
            id: "sFoe2cRnGfG_16u8fsCMWu",
            isCompleted: false,
            title: "This is title two",
            description: "this is description",
            priority: "High",
            dueDate: "2025-01-20T18:00:00.000Z",
        }
    ],
    filter: 'ALL',
    selectedTask: null,
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
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task: TTask) => task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        selectedTaskForEdit: (state, action: PayloadAction<string>) => {
            state.selectedTask = state.tasks.find(task => task.id === action.payload) || null;
        },
        updateTask: (state, action) => {
            console.log(action.payload);
            state.tasks = state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
        }
    }
})

export const tasks = (state: RootState) => {
    return state.todos.tasks
}

export const selectedTask = (state: RootState) => {
    return state.todos.selectedTask
}

export const { addTask, toggleCompleteState, deleteTask, selectedTaskForEdit, updateTask } = taskSlice.actions

export const taskReducer = taskSlice.reducer;