import {createSlice} from '@reduxjs/toolkit';

export interface AppStateState {
  isLoaded: boolean;
}

const initialState: AppStateState = {
  isLoaded: false,
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    appLoaded: state => {
      state.isLoaded = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {appLoaded} = appStateSlice.actions;

export default appStateSlice.reducer;
