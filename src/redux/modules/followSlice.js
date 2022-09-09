import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const getFollowerThunk = createAsyncThunk(
  "follower",
  async (memberId, thunkAPI) => {
    try {
      const { data } = await apis.followerMember(memberId);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const getFollowingThunk = createAsyncThunk(
  "following",
  async (memberId, thunkAPI) => {
    try {
      const { data } = await apis.followingMember(memberId);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  follower: [],
  following: [],
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: {
    [getFollowerThunk.fulfilled]: (state, action) => {
      state.follower = action.payload;
    },
    [getFollowerThunk.rejected]: () => {},
    [getFollowerThunk.pending]: () => {},

    [getFollowingThunk.fulfilled]: (state, action) => {
      state.following = action.payload;
    },
    [getFollowingThunk.rejected]: () => {},
    [getFollowingThunk.pending]: () => {},
  },
});

// export const { } = followSlice.actions;
export default followSlice.reducer;
