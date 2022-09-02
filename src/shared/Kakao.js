import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLoginDB } from "../redux/modules/memberSlice";

export default function Kakao() {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(kakaoLoginDB(code));
  }, []);

  return <></>;
}
