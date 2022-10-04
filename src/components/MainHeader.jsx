import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { prev_icon } from "../static/images";
import { useLocation } from "react-router-dom";

export default function MainHeader(props) {
  // Navigate
  const navigate = useNavigate();

  // Getting Component's URL name
  let currentPath = useLocation();
  
  return (
    <HeaderWrap {...props}>
      <HeaderTitle>
        {currentPath.pathname === "/nickname" ? (
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
        ) : currentPath.pathname === "/password" ? (
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
        ) : currentPath.pathname === "/timer" ? (
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
        ) : (
          <button onClick={() => navigate("/dlytodo")}>
            <img src={prev_icon} alt="뒤" />
          </button>
        )}
        <NicknameDiv>
          {currentPath.pathname === "/timer"
            ? "타이머"
            : currentPath.pathname === "/report"
            ? `${localStorage.getItem("nickname")} 님의 리포트`
            : `${localStorage.getItem("nickname")} 님의 통계`}
        </NicknameDiv>
      </HeaderTitle>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 30px 16px;
  background: ${(props) => (props.color === "" ? props.color : "#17171b")};
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
