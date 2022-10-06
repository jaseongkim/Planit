import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

//Sign-Up
export const createMemberDB = (data) => {
  return async function () {
    await apis
      .createMember(data)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            localStorage.setItem("refreshToken", response.headers.refreshtoken),
            localStorage.setItem(
              "accesstokenexpiretime",
              response.headers.accesstokenexpiretime
            ),
            localStorage.setItem("nickname", response.data.data.nickname),
            window.location.replace("/tutorial")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

//로그인
export const loginMemberDB = createAsyncThunk(
  "member/login",
  async (payload, thunkAPI) => {
    try {
      await apis.loginMember(payload).then((response) => {
        if (response.data.success === false) {
        } else {
          return (
            thunkAPI.fulfillWithValue(false),
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            localStorage.setItem("refreshToken", response.headers.refreshtoken),
            localStorage.setItem(
              "accesstokenexpiretime",
              response.headers.accesstokenexpiretime
            ),
            localStorage.setItem("nickname", response.data.data.nickname),
            localStorage.setItem("isKako", response.data.data.isKakao),
            window.location.replace("/wklytodo")
          );
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
      // if (error.response.status === 400 || error.response.status === 404) {
      // }
    }
  }
);

export const kakaoLoginDB = createAsyncThunk(
  "member/kakaologin",
  async (code, thunkAPI) => {
    try {
      await apis.loginKakao(code).then((response) => {
        if (response.data.success === false) {
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            localStorage.setItem("refreshToken", response.headers.refreshtoken),
            localStorage.setItem(
              "accesstokenexpiretime",
              response.headers.accesstokenexpiretime
            ),
            localStorage.setItem("nickname", response.data.data.nickname),
            localStorage.setItem("isKako", response.data.data.isKakao),
            window.location.replace("/wklytodo")
          );
        }
      });
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const updateMember = createAsyncThunk(
  "member/updatePassword",
  async (payload, thunkAPI) => {
    await apis
      .memberUpdate(payload.formData)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.message);
        } else {
          if (payload.select === "image") {
            return;
          } else if (payload.select === "nickname") {
            return (
              localStorage.removeItem("nickname"),
              localStorage.setItem("nickname", payload.nickName),
              window.location.replace("/mypage")
            );
          } else {
            return window.location.replace("/mypage");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      });
  }
);

const initialState = {
  memberlist: [],
  member: {},
  isCheck: false,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setCheck: (state, action) => {
      state.isCheck = action.payload;
    },
  },
  extraReducers: {
    [loginMemberDB.fulfilled]: (state, action) => {
      state.isCheck = action.payload;
    },
    [loginMemberDB.rejected]: (state, action) => {
      state.isCheck = action.payload;
    },
    [loginMemberDB.pending]: () => {},
  },
});

export const { setCheck } = memberSlice.actions;
export default memberSlice.reducer;
