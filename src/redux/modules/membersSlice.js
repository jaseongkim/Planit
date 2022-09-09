import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const getMemberThunk = createAsyncThunk(
  "GET_TODO",
  async (_, thunkAPI) => {
    try {
      const { data } = await apis.recommendMember();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  membersList: [],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: {
    [getMemberThunk.fulfilled]: (state, action) => {
      state.membersList = action.payload;
    },
    [getMemberThunk.rejected]: () => {},
    [getMemberThunk.pending]: () => {},
  },
});

// export const { } = membersSlice.actions;
export default membersSlice.reducer;
