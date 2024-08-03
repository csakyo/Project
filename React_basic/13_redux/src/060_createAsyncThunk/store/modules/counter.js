import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { asyncCount } from '../../api/counter';

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: '',
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.stats = 'Loading...';
    });
  },
});

const { add, minus } = counter.actions;

const addAsyncWithSStatus = createAsyncThunk(
  'counter/asyncCount',
  async (payload) => {
    const response = await asyncCount(payload);
    return response;
  }
);
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

export { add, minus, addAsync };
export default counter.reducer;
