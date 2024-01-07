import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  BuildingArts, IBuilding } from "../../models/IBuilding";

export type detailsStatus = {
    details: IBuilding | null,
    detailsStatus: boolean,
    buildingArt?: BuildingArts | null 
}

const initialState: detailsStatus = {
    details: null,
    detailsStatus: false,
    buildingArt: null
}

export const buildingSlice = createSlice({
    name: 'building',
    initialState: initialState,
    reducers: {
        toggleDetailsStatus: (state, action: PayloadAction<boolean>) => {
            state.detailsStatus = action.payload
        },
        setDetails: (state, action: PayloadAction<IBuilding | null>) => {
            state.details = action.payload
        },
        setBuildingArt: (state, action: PayloadAction<BuildingArts>) => {
            state.buildingArt = action?.payload 
        }
    }
})

export const { toggleDetailsStatus, setDetails, setBuildingArt } = buildingSlice.actions;
export default buildingSlice.reducer;