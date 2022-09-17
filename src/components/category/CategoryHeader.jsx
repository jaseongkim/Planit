import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { prev_icon } from "../../static/images";
import {FiPlus} from "react-icons/fi";
import { useParams } from "react-router-dom";


export default function CategoryHeader() {
  const navigate = useNavigate();

  let { id } = useParams();

  console.log("Check id", id);

  const onPlusHandler = () => {
    navigate(`/categorydetail/0`);
  };

  return (
    <HeaderWrap>
      <HeaderTitle>
        <button onClick={() => navigate(-1)}>
          <img src={prev_icon} alt="뒤" />
        </button>
        <NicknameDiv>카테고리</NicknameDiv>
      </HeaderTitle>
      {id === undefined ? 
        <PlusBtn onClick={onPlusHandler}>
          <FiPlus />
        </PlusBtn>
      : null}
    </HeaderWrap>
  );
}

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

const PlusBtn = styled.div`
  font-size: 20px;
`;
