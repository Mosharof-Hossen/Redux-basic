import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "./task.interface";
import { RootState } from "../../store";
import { deleteUser } from "../user/userSlice";

type InitialState = {
    tasks: TTask[],
    filter: "High" | "Medium" | "Low" | "ALL",
    selectedTask: TTask | null
}

const initialState: InitialState = {
    tasks: [
    ],
    filter: 'ALL',
    selectedTask: null,
}

type TDraftTask = Pick<TTask, 'title' | "description" | "dueDate" | "priority" | "assignedTo">;
const createTask = (taskData: TDraftTask): TTask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
    };
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
        updateTask: (state, action: PayloadAction<TTask>) => {
            console.log(action.payload);
            state.tasks = state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
        },
        updateFilter: (state, action: PayloadAction<"High" | "Medium" | "Low" | "ALL">) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            state.tasks.forEach((task) => task.assignedTo === action.payload ? task.assignedTo = null : task)
        })
    }
})

export const tasks = (state: RootState) => {
    console.log(state);
    if (state.todos.filter === "Low") {
        return state.todos.tasks.filter((task) => task.priority === "Low")
    }
    else if (state.todos.filter === "Medium") {
        return state.todos.tasks.filter((task) => task.priority === "Medium")
    }
    if (state.todos.filter === "High") {
        return state.todos.tasks.filter((task) => task.priority === "High")
    }
    return state.todos.tasks
}


export const selectedTask = (state: RootState) => {
    return state.todos.selectedTask
}

export const { addTask, toggleCompleteState, updateFilter, deleteTask, selectedTaskForEdit, updateTask } = taskSlice.actions

export const taskReducer = taskSlice.reducer;