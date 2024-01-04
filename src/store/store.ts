import { configureStore } from "@reduxjs/toolkit";
import buildingSlice from "../features/building/buildingSlice";



export const store = configureStore({
    reducer: {
        building: buildingSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;