import styled from "styled-components";
import MainHeader from "../MainHeader";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/modules/memberSlice";

export default function NickName() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordLength, setIsPasswordLength] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 비밀번호 입력
  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    // 비밀번호 정규식
    let passwordExp =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{2,}$/i;

    if (passwordExp.test(password) === false) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }

    if (password.length >= 10 && password.length <= 20) {
      setIsPasswordLength(true);
    } else {
      setIsPasswordLength(false);
    }
  };

  const onPasswordConfirmChange = (e) => {
    const passwordConfirm = e.target.value;
    setPasswordConfirm(passwordConfirm);
  };

  useEffect(() => {
    if (password === passwordConfirm) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  }, [password, passwordConfirm]);

  const onUpdateHandler = () => {
    const formData = new FormData();

    const blob = new Blob([JSON.stringify({ password: password })], {
      type: "application/json",
    });

    formData.append("data", blob);

    dispatch(updatePassword(formData));
  };

  return (
    <SubContainer>
      <MainHeader text={"비밀번호 변경"} />
      <SignUpCon>
        <SignUpItem>
          <SignUpInputBox>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={password || ""}
              onChange={onPasswordChange}
              autoComplete="off"
            />
            {isPassword ? (
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

            {isPasswordLength ? (
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
              value={passwordConfirm || ""}
              onChange={onPasswordConfirmChange}
              autoComplete="off"
            />

            {passwordConfirm.length > 0 && (
              <div>
                {isPasswordConfirm ? (
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
      </SignUpCon>
      <StySubmitButton
        disabled={!(isPassword && isPasswordConfirm && isPasswordLength)}
        onClick={onUpdateHandler}
      >
        확인
      </StySubmitButton>
    </SubContainer>
  );
}

const SignUpCon = styled.div`
  margin-top: 14px;
  padding: 0 16px;
`;

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

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 150px;
  background: #17171b;
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

const StySubmitButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px 0 40px;
  font-size: 20px;
  color: #fff;
  background: #1671fa;
  border: none;
  transition: 0.2s;

  &:disabled {
    background: #8b98ac;
  }
`;
