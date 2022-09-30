import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { next_icon } from "../../static/images";

export default function MyPageItem(props) {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const LOGOUT_REDIRECT_URI = "http://localhost:3000/login";
  const navigate = useNavigate();
  const isKakao = localStorage.getItem("isKako");

  const onClickHandler = (e, id) => {
    e.stopPropagation();
    if (id === 1) {
      navigate("/nickname");
    } else if (id === 2) {
      navigate("/password");
    } else if (id === 3) {
      if (isKakao === "true") {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
      } else if (isKakao === "false") {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  return (
    <>
      <MyPageWrap
        onClick={(e) => {
          onClickHandler(e, props.id);
        }}
      >
        {props.text}
        <img src={next_icon} alt="next arrow" />
      </MyPageWrap>
    </>
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
