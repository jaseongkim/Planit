import React, { useState } from "react";
import { createMemberDB } from "../redux/modules/memberSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { prev_icon } from "../static/images";
import { apis } from "../shared/api";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isNickNameLength, setIsNickNameLength] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordLength, setIsPasswordLength] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 확인 메세지
  const [emailMessage, setEmailMessage] = useState(false);

  const [signUp, setSignUp] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  // Submitting userInfo to server
  const onSignupHandler = (e) => {
    e.preventDefault();

    dispatch(
      createMemberDB({
        email: signUp.email,
        nickname: signUp.nickname,
        password: signUp.password,
      })
    );
  };

  // 이메일 입력
  const onEmailChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  // 닉네임 정규식
  let nickNameExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{0,}$/i;

  // 닉네임 입력
  const onNickNameChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });

    if (nickNameExp.test(signUp.nickname) === false) {
      setIsNickName(false);
    } else {
      setIsNickName(true);
    }

    if (signUp.nickname.length >= 2 && signUp.nickname.length <= 9) {
      setIsNickNameLength(true);
    } else {
      setIsNickNameLength(false);
    }
  };

  // 비밀번호 정규식
  let passwordExp =
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/i;

  // 비밀번호 입력
  const onPasswordChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
    if (passwordExp.test(signUp.password) === false) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }

    if (signUp.password.length >= 10 && signUp.password.length <= 20) {
      setIsPasswordLength(true);
    } else {
      setIsPasswordLength(false);
    }
  };

  const onPasswordConfirmChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });

    if (signUp.password === signUp.passwordConfirm) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  };

  //Email Double-Check
  const doubleCheckEmail = () => {
    let emailExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (emailExp.test(signUp.email) === false) {
      setEmailMessage(true);
      // setSignUp({
      //   email: "",
      // });
      return;
    }

    apis
      .checkEmail({ email: signUp.email })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setIsEmail(true);
          setEmailMessage(true);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          setIsEmail(false);
          setEmailMessage(true);
        }
      });
  };

  return (
    <SubContainer>
      <HeaderWrap>
        <HeaderTitle>
          {console.log(isNickName)}
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
                <button type="button" onClick={doubleCheckEmail}>
                  중복확인
                </button>
              </span>
              <SignUpInputBox>
                <input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  name="email"
                  value={signUp.email || ""}
                  onChange={onEmailChange}
                />

                <div
                  style={{
                    visibility: `${emailMessage ? "visible" : "hidden"}`,
                  }}
                >
                  {isEmail ? (
                    <span style={{ color: "green" }}>
                      <IoIosArrowDown style={{ marginRight: "3px" }} />
                      사용 가능한 아이디 입니다.
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      <IoIosClose style={{ marginRight: "3px" }} />
                      사용 할 수 없는 아이디 입니다.
                    </span>
                  )}
                </div>
              </SignUpInputBox>
            </SignUpItem>
            <SignUpItem>
              <span className="signup-item-title">닉네임</span>
              <SignUpInputBox>
                <input
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                  name="nickname"
                  value={signUp.nickname || ""}
                  onChange={onNickNameChange}
                />
                {nickNameExp.test(signUp.nickname) ? (
                  <span className="signup-item1" style={{ color: "green" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    한글/영문/숫자 사용
                  </span>
                ) : (
                  <span className="signup-item1" style={{ color: "gray" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    한글/영문/숫자 사용
                  </span>
                )}

                {signUp.nickname.length >= 2 && signUp.nickname.length <= 9 ? (
                  <span className="signup-item2" style={{ color: "green" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    2-9자 사용
                  </span>
                ) : (
                  <span className="signup-item2" style={{ color: "gray" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    2-9자 사용
                  </span>
                )}
              </SignUpInputBox>
            </SignUpItem>
            <SignUpItem>
              <span className="signup-item-title">비밀번호</span>
              <SignUpInputBox>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  name="password"
                  value={signUp.password || ""}
                  onChange={onPasswordChange}
                  autoComplete="off"
                />
                {passwordExp.test(signUp.password) ? (
                  <span className="signup-item1" style={{ color: "green" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    영문/숫자/특수문자 중 2종류 이상 사용
                  </span>
                ) : (
                  <span className="signup-item1" style={{ color: "gray" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    영문/숫자/특수문자 중 2종류 이상 사용
                  </span>
                )}

                {signUp.password.length >= 10 &&
                signUp.password.length <= 20 ? (
                  <span className="signup-item2" style={{ color: "green" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    10자 이상으로 사용
                  </span>
                ) : (
                  <span className="signup-item2" style={{ color: "gray" }}>
                    <IoIosArrowDown style={{ marginRight: "3px" }} />
                    10자 이상으로 사용
                  </span>
                )}
              </SignUpInputBox>
            </SignUpItem>
            <SignUpItem>
              <span className="signup-item-title">비밀번호 확인</span>
              <SignUpInputBox>
                <input
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요"
                  name="passwordConfirm"
                  value={signUp.passwordConfirm || ""}
                  onChange={onPasswordConfirmChange}
                  autoComplete="off"
                />

                {signUp.passwordConfirm.length > 0 && (
                  <div>
                    {signUp.password === signUp.passwordConfirm ? (
                      <span style={{ color: "green" }}>
                        <IoIosArrowDown style={{ marginRight: "3px" }} />
                        비밀번호가 일치합니다.
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        <IoIosArrowDown style={{ marginRight: "3px" }} />
                        비밀번호가 일치하지 않습니다.
                      </span>
                    )}
                  </div>
                )}
              </SignUpInputBox>
            </SignUpItem>
          </SignUpList>
          <SignUpSubmit
            type="submit"
            disabled={
              !(
                isEmail &&
                isNickName &&
                isNickNameLength &&
                isPassword &&
                isPasswordLength &&
                isPasswordConfirm
              )
            }
          >
            확인
          </SignUpSubmit>
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

  .signup-item1 {
    display: block;
    position: absolute;
    bottom: -30px;
    width: 100%;
    font-size: 12px;
  }
  .signup-item2 {
    display: block;
    position: absolute;
    bottom: -50px;
    width: 100%;
    font-size: 12px;
  }
`;

const SignUpSubmit = styled.button`
  margin-top: 100px;
  width: 100%;
  height: 52px;
  font-size: 20px;
  color: #fff;
  background: #3185f3;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
