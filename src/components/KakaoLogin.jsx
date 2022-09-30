import styled from "styled-components";

export default function KakaoLogin() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/login/kakao";
  // const REDIRECT_URI = "https://planit-todo.com/kakao";

  return (
    <Kakao
      onClick={() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      }}
    >
      카카오로 로그인
    </Kakao>
  );
}
const Kakao = styled.button`
  width: 100%;
  height: 52px;
  font-size: 18px;
  color: #17171b;
  background: #f2e06b;
  border: none;
  border-radius: 8px;
`;
