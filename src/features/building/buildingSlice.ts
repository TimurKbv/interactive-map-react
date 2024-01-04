import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBuilding } from "../../models/IBuilding";

export type detailsStatus = {
    details: IBuilding | null,
    detailsStatus: boolean
}

const initialState: detailsStatus = {
    details: null,
    detailsStatus: false
}

export const buildingSlice = createSlice({
    name: 'building',
    initialState: initialState,
    reducers: {
        toggleDetailsStatus: (state, action: PayloadAction<boolean>) => {
            state.detailsStatus = action.payload
        },
        setDetails: (state, action: PayloadAction<IBuilding | null>) => {
            console.log(action.payload);
            state.details = action.payload
        }
    }
})

export const { toggleDetailsStatus, setDetails } = buildingSlice.actions;
export default buildingSlice.reducer;