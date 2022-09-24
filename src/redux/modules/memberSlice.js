import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

//Sign-Up
export const createMemberDB = (data) => {
  return async function () {
    await apis
      .createMember(data)
      .then((response) => {
        console.log("Checking response ", response);
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.location.replace("/"),
            alert("성공적으로 회원가입되셨습니다!")
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
export const loginMemberDB = (data) => {
  return async function () {
    await apis
      .loginMember(data)
      .then((response) => {
        console.log(response);
        if (response.data.success === false) {
          return window.alert("Hello");
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
            window.location.replace("/dlytodo")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(error);
        }
      });
  };
};

export const kakaoLoginDB = (code) => {
  return async function () {
    await apis.loginKakao(code).then((response) => {
      console.log(response);
    });
  };
};

export const updateMemberDB = createAsyncThunk(
  "member/updateMemberDB",
  async (formData, thunkAPI) => {
    for (const keyValue of formData) console.log(keyValue);
    // await apis
    //   .memberUpdate(formData)
    //   .then((response) => {
    //     console.log(response);
    //     // if (response.data.success === false) {
    //     //   return window.alert(response.data.message);
    //     // } else {
    //     // }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.response.status === 400) {
    //       alert(error.response.data.message);
    //     }
    //   });
  }
);

const initialState = {
  memberlist: [],
  member: {},
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const { } = memberSlice.actions;
export default memberSlice.reducer;
