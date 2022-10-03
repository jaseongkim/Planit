import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
statistic: [],
};

export const getChartData = createAsyncThunk(
"makeChatRoom",
async (payload, thunkAPI) => {
try {
const response = await axios.get("https://teamsparta.link/statistic/week", {
params: {
startDate: payload,
},
headers: {
    Authorization: localStorage.getItem("token")
}
});
console.log(response);
return thunkAPI.fulfillWithValue(response.data.data);
} catch (err) {
return thunkAPI.rejectWithValue(err);
}
},
);

const statisticSlice = createSlice({
name: "statistic",
initialState,
extraReducers: {
[getChartData.fulfilled]: (state, action) => {
state.statistic = action.payload;
},
},
});

export default statisticSlice.reducer;