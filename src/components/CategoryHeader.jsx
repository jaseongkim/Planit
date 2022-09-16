import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { back_arrow } from "../static/images";
import { FiPlusCircle } from "react-icons/fi";

export default function CategoryHeader() {
  const navigate = useNavigate();

  const onPlusHandler = () => {};

  return (
    <HeaderWrap>
      <div onClick={() => navigate(-1)}>
        <img src={back_arrow} alt="뒤" />
      </div>
      <NicknameDiv>목표</NicknameDiv>
      <PlusBtn onClick={() => {}}>
        <FiPlusCircle />
      </PlusBtn>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.nav`
  max-width: 375px;
  width: 100%;
  height: 54px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
`;

const NicknameDiv = styled.div`
  text-align: center;
  padding: 0 0 0 12px;
  font-size: 20px;
  font-weight: 500;
`;

const PlusBtn = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;
