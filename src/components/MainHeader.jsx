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
    <HeaderWrap>
      <HeaderTitle>
        {currentPath.pathname === "/nickname" ? (
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
        ) : currentPath.pathname === "/password" ? (
          <button onClick={() => navigate(-1)}>
            <img src={prev_icon} alt="뒤" />
          </button>
        ) : (
          <button onClick={() => navigate("/dlytodo")}>
            <img src={prev_icon} alt="뒤" />
          </button>
        )}
        <NicknameDiv>{props.text}</NicknameDiv>
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
