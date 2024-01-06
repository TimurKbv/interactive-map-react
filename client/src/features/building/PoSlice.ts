import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPo } from "../../models/IBuilding";

export type PodetailsStatus = {
    details: IPo | null,
    detailsStatus: boolean
}

const initialState: PodetailsStatus = {
    details: null,
    detailsStatus: false
}

export const poSlice = createSlice({
    name: 'po',
    initialState: initialState,
    reducers: {
        setPoDetails: (state, action: PayloadAction<IPo | null>) => {
            console.log(action.payload);
            state.details = action.payload
        }
    }
})

export const { setPoDetails } = poSlice.actions;
export default poSlice.reducer;