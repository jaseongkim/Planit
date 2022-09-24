import styled from "styled-components";
import MainHeader from "../MainHeader";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMemberDB } from "../../redux/modules/memberSlice";

export default function NickName() {
  const dispatch = useDispatch();

  const [nickName, setNickName] = useState("");
  const [isNickName, setIsNickName] = useState(false);
  const [isNickNameLength, setIsNickNameLength] = useState(false);

  // 닉네임 입력
  const onNickNameChange = (e) => {
    const nickname = e.target.value;
    setNickName(nickname);

    // 닉네임 정규식
    let nickNameExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{0,}$/i;

    if (nickNameExp.test(nickname) === false) {
      setIsNickName(false);
    } else {
      setIsNickName(true);
    }

    if (nickname.length >= 2 && nickname.length <= 9) {
      setIsNickNameLength(true);
    } else {
      setIsNickNameLength(false);
    }
  };

  const onUpdateHandler = () => {
    const formData = new FormData();

    const blob = new Blob([JSON.stringify({ nickname: nickName })], {
      type: "application/json",
    });

    formData.append("data", blob);

    dispatch(updateMemberDB(formData));
  };

  return (
    <SubContainer>
      <MainHeader text={"닉네임 변경"} />
      <SignUpCon>
        <SignUpItem>
          <SignUpInputBox>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              name="nickname"
              value={nickName || ""}
              onChange={onNickNameChange}
            />
            {isNickName ? (
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

            {isNickNameLength ? (
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
      </SignUpCon>
      <SignUpSubmit
        disabled={!(isNickName && isNickNameLength)}
        onClick={onUpdateHandler}
      >
        확인
      </SignUpSubmit>
    </SubContainer>
  );
}

const SignUpCon = styled.div`
  height: 100%;
  padding: 0 20px;
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
  padding: 100px 0 40px;
  overflow-y: auto;
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

const SignUpSubmit = styled.button`
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
