import styled from "styled-components";
import { kakaologin } from "../static/images";

export default function KakaoLogin() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/kakao";

  return (
    <Kakao
      onClick={() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      }}
    >
      <img src={kakaologin} alt="kakaologin" />
    </Kakao>
  );
}
const Kakao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
