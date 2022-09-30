import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { prev_icon } from "../static/images";

export default function MainHeader(props) {
  
  const navigate = useNavigate();
  
  return (
    <HeaderWrap>
      <HeaderTitle>
        <button onClick={() => navigate(-1)}>
          <img src={prev_icon} alt="뒤" />
        </button>
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
