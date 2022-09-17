import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";
import Button from "../element/Button";
import LoginInput from "../element/LoginInput";
import { loginMemberDB } from "../redux/modules/memberSlice";
import { useNavigate } from "react-router-dom";


const LogInPage = () => {
  const navigate = useNavigate();
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
    console.log("로그인이 완료되셨습니다!")
    navigate("/dlytodo")

  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onLoginHandler();
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginWrap>
          <LoginLogo>Planit</LoginLogo>
          <LoginInputBox>
            <div>
              <span>아이디</span>
              <input
                type="text"
                name="email"
                value={member.email}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <span>비밀번호</span>
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
            <Button _onClick={onLoginHandler}>
              로그인
            </Button>
            <LoginNav>
              <a href="/signup">회원가입</a>
            </LoginNav>
          </LoginBtn>
        </LoginWrap>

        <KakaoLogin />
      </LoginContainer>
    </>
  );
};

export default LogInPage;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 100px 20px 55px;
`;

const LoginWrap = styled.div`
  width: 100%;
`;

const LoginLogo = styled.div`
  text-align: center;
  font-family: Kefa;
  color: #fff;
  font-weight: 900;
  font-size: 48px;
  margin: 0 auto 55px;
`;

const LoginInputBox = styled.div`
  div {
    position: relative;
  }
  div:first-child {
    margin-bottom: 12px;
  }
  span {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #fff;
  }
  input {
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 0 15px 0 87px;
    background: rgba(170, 188, 224, 0.2);
    border: none;
    border-radius: 4px;
  }
`;
const LoginBtn = styled.div`
  margin-top: 24px;

  button {
    height: 52px;
    font-size: 18px;
    color: #fff;
    background: rgba(51, 139, 255, 0.9);
    border: none;
    border-radius: 8px;
  }
`;

const LoginNav = styled.div`
  color: #fff;
  font-size: 14px;
  margin-top: 12px;
`;
