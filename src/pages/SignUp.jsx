import React, {useState} from "react";
import { checkEmail, createMemberDB } from "../redux/modules/memberSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BrowserView, MobileView, isBrowser, isMobile, isLegacyEdge } from 'react-device-detect';

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

    alert("Hello")
}

//Updating userInfo to Hook
const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });

    console.log(signUp)
}

const doubleCheckEmail = () => {
  // dispatch( checkEmail({
  //   email: signUp.email
  // }))

  alert("Checking double Check Email")
}

  return (
    <>
      <BrowserView>
        <SignUpCon>
            <form onSubmit={onSignupHandler}>
                <SignUpInput 
                    type="text" 
                    placeholder="이메일을 입력하세요" 
                    name="email"
                    value={signUp.email}
                    onChange={onChangeHandler}
                    required
                />
                 <SignUpInput 
                    type="text" 
                    placeholder="닉네임을 입력해주세요" 
                    name="nickname"
                    value={signUp.nickname}
                    onChange={onChangeHandler}
                    required 
                />
                <button type="button" onClick={doubleCheckEmail}>중복확인</button>
                <SignUpInput 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요" 
                    name="password"
                    value={signUp.password}
                    onChange={onChangeHandler}
                    required 
                />
                <SignUpInput 
                    type="password" 
                    placeholder="비밀번호를 다시 입력해주세요" 
                    name="passwordConfirm"
                    value={signUp.passwordConfirm}
                    onChange={onChangeHandler}
                    required 
                />
                <button type="submit">회원가입</button> 
            </form>
        </SignUpCon>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </>
  );
};

export default SignUp;

const SignUpCon = styled.div`
  height: 100vh;
  width: 350px;
  margin: 0 auto;
  background-color: red;

`;

const SignUpInput = styled.input`
    width: 80%;
`
