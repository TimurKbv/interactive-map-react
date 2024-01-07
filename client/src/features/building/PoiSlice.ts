import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPoi } from "../../models/IBuilding";

export type PoiDetailsStatus = {
    details: IPoi | null,
    detailsStatus: boolean
}

const initialState: PoiDetailsStatus = {
    details: null,
    detailsStatus: false
}

export const poiSlice = createSlice({
    name: 'poi',
    initialState: initialState,
    reducers: {
        setPoiDetails: (state, action: PayloadAction<IPoi | null>) => {
            state.details = action.payload
        }
    }
})

export const { setPoiDetails } = poiSlice.actions;
export default poiSlice.reducer;