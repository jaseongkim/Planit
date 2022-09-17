import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { back_arrow } from "../../static/images";
import { FiPlusCircle } from "react-icons/fi";
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
      <div onClick={() => navigate(-1)}>
        <img src={back_arrow} alt="뒤" />
      </div>
      <NicknameDiv>카테고리</NicknameDiv>
      {id === undefined ? 
        <PlusBtn onClick={onPlusHandler}>
          <FiPlusCircle />
        </PlusBtn>
      : null}
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
  /* padding: 0 0 0 12px; */
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
`;

const PlusBtn = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;
