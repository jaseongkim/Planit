import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { next_icon } from "../../static/images";

export default function MyPageItem(props) {
  const navigate = useNavigate();

  const onClickHandler = (e, id) => {
    e.stopPropagation();
    if (id === 1) {
      navigate("/nickname");
    } else if (id === 2) {
      navigate("/password");
    } else if (id === 3) {
      localStorage.clear();
      alert("로그아웃 되었습니다!");
      navigate("/");
    }
  };

  return (
    <MyPageWrap
      onClick={(e) => {
        onClickHandler(e, props.id);
      }}
    >
      {props.text}
      <img src={next_icon} alt="next arrow" />
    </MyPageWrap>
  );
}

const MyPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #fff;
  padding: 18px 0;
  border-bottom: 1px solid #5d646b;
  cursor: pointer;
`;
