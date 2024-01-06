import { configureStore } from "@reduxjs/toolkit";
import buildingSlice from "../features/building/BuildingSlice";
import PoSlice from "../features/building/PoSlice";



export const store = configureStore({
    reducer: {
        building: buildingSlice,
        po: PoSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;