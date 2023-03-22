import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DarkLightState {
    darkMode: boolean;
}

const initialState: DarkLightState = {
    darkMode: false,
};
const projects = createSlice({
    name: 'darkLight',
    initialState,
    reducers: {
        setDarkModes(state, action: PayloadAction<DarkLightState>) {
            state.darkMode = action.payload.darkMode;
        },
    },
});

const { reducer: setDarkMode, actions } = projects;

export const { setDarkModes } = actions;

export default setDarkMode;
