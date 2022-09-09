import React, { useState } from "react";
import { useDispatch } from "react-redux";
import KakaoLogin from "../components/KakaoLogin";
import { loginMemberDB } from "../redux/modules/memberSlice";
import { apis } from "../shared/api";

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

  const onCategoriseHandler = async () => {
    await apis.getCategories().then((response) => {
      console.log(response);
    });
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onLoginHandler();
    }
  };

  return (
    <div>
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

      <button onClick={onLoginHandler}>로그인</button>
      <button onClick={onCategoriseHandler}>카테고리 테스트</button>
      <KakaoLogin />
    </div>
  );
};

export default LogInPage;
