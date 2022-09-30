import { useEffect } from "react";

export default function KakaoLogout() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const LOGOUT_REDIRECT_URI = process.env.LOGOUT_REDIRECT_URI;

  useEffect(() => {
    window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  }, []);

  return <></>;
}
