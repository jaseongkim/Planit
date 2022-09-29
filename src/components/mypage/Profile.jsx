import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updatePassword } from "../../redux/modules/memberSlice";
import { profile_default, camera_icon } from "../../static/images";

export default function Profile() {
  const dispatch = useDispatch();

  const nicName = localStorage.getItem("nickname");

  const [fileImage, setFileImage] = useState(""); // 프로필 이미지 파일을 저장할 변수
  // 이미지가 없을 시 기본 프로필
  const [image, setImage] = useState(`${profile_default}`);

  const fileInput = useRef(null);

  const onProfileChange = (e) => {
    if (e.target.files[0]) {
      setFileImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(`${profile_default}`);
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onUpdateHandler = () => {
    const formData = new FormData();

    formData.append("image", fileImage);

    dispatch(updatePassword(formData));
  };

  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileImage>
          <img
            src={image}
            alt="이미지"
            style={{ width: "66px", height: "66px", borderRadius: "100px" }}
          />
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,image/png,image/jpeg"
            name="profile_img"
            onChange={onProfileChange}
            ref={fileInput}
          />
          <div
            onClick={() => {
              fileInput.current.click();
            }}
          >
            <img src={camera_icon} alt="카메라 아이콘" />
          </div>
        </ProfileImage>
        <MyInfoWrap>
          <p>{nicName}</p>
          {/* <FollowBox>
            <button>
              팔로워<span>12</span>
            </button>
            <button>
              팔로잉<span>12</span>
            </button>
          </FollowBox> */}
        </MyInfoWrap>
      </ProfileWrap>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  padding: 0 16px;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.div`
  position: relative;
  min-width: 66px;
  height: 66px;

  & > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background: #d9d9d9;
    border: none;
    border-radius: 100px;
    z-index: 10;
  }
`;

const MyInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    font-size: 20px;
    color: #fff !important;
  }
`;

const FollowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  button {
    width: 50%;
    text-align: left;
    color: #fff;
    font-size: 16px;
    padding: 0;
    background: transparent;
    border: none;

    span {
      line-height: 1;
      margin-left: 8px;
    }
  }
`;
