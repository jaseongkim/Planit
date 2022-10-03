// React Navigation
import { useNavigate, useParams, useLocation } from "react-router-dom";
// Styled Component
import styled from "styled-components";
// Icons
import { prev_icon } from "../../static/images";
import { FiPlus } from "react-icons/fi";

export default function CategoryHeader() {
  const navigate = useNavigate();

  // Getting URL's ID
  let { id } = useParams(); 
  // Getting Component's URL name
  let currentPath = useLocation();

  const onPlusHandler = (e) => {
    e.stopPropagation();
    navigate(`/categorydetail/0`);
  };

  return (
    <HeaderWrap>
      <HeaderTitle>
        {currentPath.pathname === '/category' ?  
        (<button onClick={() => navigate("/WklyTodo")}>
        <img src={prev_icon} alt="뒤" />
      </button>) :
        (<button onClick={() => navigate(-1)}>
          <img src={prev_icon} alt="뒤" />
        </button>) 
        }
        <NicknameDiv>카테고리</NicknameDiv>
      </HeaderTitle>
      {id === undefined ? (
        <PlusBtn
          onClick={(e) => {
            onPlusHandler(e);
          }}
        >
          <FiPlus />
        </PlusBtn>
      ) : null}
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

const PlusBtn = styled.div`
  font-size: 20px;
`;
