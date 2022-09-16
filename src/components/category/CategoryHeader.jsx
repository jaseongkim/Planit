import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { back_arrow } from "../../static/images";
import { FiPlusCircle } from "react-icons/fi";

export default function CategoryHeader() {
  const navigate = useNavigate();

  const onPlusHandler = () => {
    navigate(`/categorydetail/0`);
  };

  return (
    <HeaderWrap>
      <div onClick={() => navigate(-1)}>
        <img src={back_arrow} alt="뒤" />
      </div>
      <NicknameDiv>카테고리</NicknameDiv>
      <PlusBtn onClick={onPlusHandler}>
        <FiPlusCircle />
      </PlusBtn>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.nav`
  width: 100%;
  height: 4em;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  border: 3px solid red;
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
