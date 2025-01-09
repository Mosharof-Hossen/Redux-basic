import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import { taskReducer } from "./features/task/taskSlice";
import { userReducer } from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        MyCounter: counterReducer,
        todos: taskReducer,
        users: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;