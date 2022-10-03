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

export const getProfileThunk = createAsyncThunk(
  "GET_Profil",
  async (id, thunkAPI) => {
    try {
      const { data } = await apis.mypageProfile(id);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  membersList: [],
  profile: {
    memberId: "",
    nickname: "",
    profileImgUrl: "",
    followerCnt: 0,
    followingCnt: 0,
  },
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

    [getProfileThunk.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [getProfileThunk.rejected]: () => {},
    [getProfileThunk.pending]: () => {},
  },
});

// export const { } = membersSlice.actions;
export default membersSlice.reducer;
