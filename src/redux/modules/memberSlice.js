import { createSlice } from "@reduxjs/toolkit";
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
            window.alert(
              `${response.data.data.nickname}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/")
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

//Email Double-Check
export const checkEmail = (data) => {
  return async function () {
    await apis
      .checkEmail(data)
      .then((response) => {
        console.log("Checking response ", response);
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.alert(
              `${response.data.data.nickname}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/")
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
          return window.alert(response.data.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("email", response.data.data.email),
            localStorage.setItem("refreshToken", response.headers.refreshtoken),
            localStorage.setItem(
              "accesstokenexpiretime",
              response.headers.accesstokenexpiretime
            )
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(error);
          window.alert(error.response.data.message);
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
