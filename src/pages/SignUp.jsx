import React, {useState} from "react";
import { checkEmail, createMemberDB } from "../redux/modules/memberSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BrowserView, MobileView, isBrowser, isMobile, isLegacyEdge } from 'react-device-detect';
import { prev_icon } from "../static/images";

const SignUp = () => {

  // Redux
  const dispatch = useDispatch();

  const [signUp, setSignUp] = useState({
      email: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
  })

  // Submitting userInfo to server
  const onSignupHandler = (e) => {
      e.preventDefault();
      
      dispatch( createMemberDB({
          email: signUp.email,
          nickname: signUp.nickname,
          password: signUp.password,
        }))
  }

  //Updating userInfo to Hook
  const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setSignUp({ ...signUp, [name]: value });

      console.log(signUp)
  }

  const doubleCheckEmail = () => {
    dispatch( checkEmail({
      email: signUp.email
    }))

    alert("Checking double Check Email")
  }

  const navigate = useNavigate();

  return (
    <SubContainer>
      <HeaderWrap>
        <HeaderTitle>
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
          <NicknameDiv>회원가입</NicknameDiv>
        </HeaderTitle>
      </HeaderWrap>
      <SignUpCon>
        <form onSubmit={onSignupHandler}>
          <SignUpList>
            <SignUpItem>
              <span className="signup-item-title">
                아이디
                <button type="button" onClick={doubleCheckEmail}>중복확인</button>
              </span>
              <SignUpInputBox>
                <input 
                  type="text"
                  placeholder="이메일을 입력하세요" 
                  name="email"
                  value={signUp.email}
                  onChange={onChangeHandler}
                  required
                />
                <span>사용할 수 없는 아이디 입니다.</span>
              </SignUpInputBox>
            </SignUpItem>
            <SignUpItem>
              <span className="signup-item-title">닉네임</span>
              <SignUpInputBox>
                <input 
                  type="text" 
                  placeholder="닉네임을 입력해주세요" 
                  name="nickname"
                  value={signUp.nickname}
                  onChange={onChangeHandler}
                  required
                />
              </SignUpInputBox>
            </SignUpItem>  
            <SignUpItem>
              <span className="signup-item-title">비밀번호</span>
              <SignUpInputBox>
                <input
                  type="password" 
                  placeholder="비밀번호를 입력해주세요" 
                  name="password"
                  value={signUp.password}
                  onChange={onChangeHandler}
                  required 
                />
              </SignUpInputBox>
            </SignUpItem>     
            <SignUpItem>
              <span className="signup-item-title">비밀번호 확인</span>
              <SignUpInputBox>
                <input
                  type="password" 
                  placeholder="비밀번호를 다시 입력해주세요" 
                  name="passwordConfirm"
                  value={signUp.passwordConfirm}
                  onChange={onChangeHandler}
                  required   
                />
              </SignUpInputBox>
            </SignUpItem>
          </SignUpList>
          <SignUpSubmit type="submit">확인</SignUpSubmit> 
        </form>
      </SignUpCon>
    </SubContainer>
  );
};

export default SignUp;

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 100px 0 40px;
  overflow-y: auto;
  background: #17171b;
`;

const HeaderWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  color: #fff;
  padding: 40px 20px 10px;
  background: #17171b;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
  }
`;

const NicknameDiv = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-left: 20px;
`;

const SignUpCon = styled.div`
  height: 100%;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const SignUpList = styled.div``;

const SignUpItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  &:not(:first-child) {
    margin-top: 80px;
  }

  .signup-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;

    button {
      line-height: 1;
      font-size: 10px;
      color: #fff;
      padding: 5px 7.5px;
      background: #5d646b;
      border: none;
      border-radius: 100px;
    }
  }
`;

const SignUpInputBox = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 0 15px;
    background: #343842;
    border: none;
    border-radius: 4px;

    &::placeholder {
      color: #fff;
    }
  }

  span {
    display: block;
    position: absolute;
    bottom: -30px;
    width: 100%;
    font-size: 12px;
  }
`;

const SignUpSubmit = styled.button`
  width: 100%;
  height: 52px;
  font-size: 20px;
  color: #fff;
  background: #3185f3;
  border: none;
  border-radius: 8px;

  &::disbled {
    background: #8b98ac;
  }
`;
