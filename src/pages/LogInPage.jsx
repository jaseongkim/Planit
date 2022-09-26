import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";
import Button from "../element/Button";
import { loginMemberDB } from "../redux/modules/memberSlice";
import { logo } from "../static/images";
import { IoIosClose } from "react-icons/io";

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
    console.log("로그인이 완료되셨습니다!");
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
          <LoginLogo>
            <img src={logo} alt="로고 이미지" />
          </LoginLogo>
          <LoginInputWrap>
            <LoginItem>
              <span>아이디</span>
              <input
                type="text"
                name="email"
                value={member.email}
                onChange={onChangeHandler}
              />
            </LoginItem>
            <LoginItem>
              <span>비밀번호</span>
              <input
                type="password"
                name="password"
                value={member.password}
                onChange={onChangeHandler}
                onKeyUp={onKeyUp}
              />
            </LoginItem>
          </LoginInputWrap>
          <InvalidMsg style={{ color: "#d65a5a" }}>
            <IoIosClose style={{ marginRight: "3px" }} />
            이메일과 비밀번호를 확인해주세요.
          </InvalidMsg>
          <LoginBtn>
            <Button _onClick={onLoginHandler}>로그인</Button>
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
  margin-bottom: 70px;
`;

const LoginInputWrap = styled.div`
  padding-bottom: 12px;
`;

const LoginItem = styled.div`
  position: relative;
  &:first-child {
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

const InvalidMsg = styled.span`
  line-height: 1;
  font-size: 12px;
`;

const LoginBtn = styled.div`
  padding-top: 12px;

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
