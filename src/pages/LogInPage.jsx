import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";
import Button from "../element/Button";
import LoginInput from "../element/LoginInput";
import { loginMemberDB } from "../redux/modules/memberSlice";

const LogInPage = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const [member, setMember] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const onLoginHandler = () => {
    dispatch(loginMemberDB(member));
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onLoginHandler();
    }
  };

  return (
    <>
      <LoginLogo></LoginLogo>
      <LoginInputBox>
        <div>
          <input
            type="text"
            name="email"
            value={member.email}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={member.password}
            onChange={onChangeHandler}
            onKeyUp={onKeyUp}
          />
        </div>
      </LoginInputBox>
      <LoginBtn>
        <Button
          _onClick={onLoginHandler}
          width="335px"
          height="52px"
          borderRadius="10px"
        >
          로그인
        </Button>
        <LoginNav>
          <div>회원가입</div>
          <div>아이디/비밀번호찾기</div>
        </LoginNav>

        <KakaoLogin />
      </LoginBtn>
    </>
  );
};

export default LogInPage;

const LoginContainer = styled.div``;

const LoginLogo = styled.div`
  width: 200px;
  height: 100px;
  text-align: center;
  margin: 50px auto;
  background: red;
`;

const LoginInputBox = styled.div`
  width: 300px;
  height: auto;
  text-align: center;
  margin: 0px auto;
  background: green;
`;
const LoginBtn = styled.div`
  width: 375px;
  height: auto;
  text-align: center;
  margin: 0px auto;
  background: yellow;
`;

const LoginNav = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  text-align: center;
  margin: 0px auto;
  background: orange;
`;
