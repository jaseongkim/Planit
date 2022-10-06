import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMember } from "../../redux/modules/memberSlice";
import { getProfileThunk } from "../../redux/modules/membersSlice";
import { camera_icon } from "../../static/images";

export default function Profile() {
  const dispatch = useDispatch();

  const memberId = localStorage.getItem("memberId");

  const memberProfile = useSelector((state) => state.membersSlice.profile);

  // 바뀐 이미지
  const [image, setImage] = useState("");

  const fileInput = useRef(null);

  const onProfileChange = (e) => {
    const formData = new FormData();

    if (e.target.files[0]) {
      formData.append("image", e.target.files[0]);
    } else {
      //업로드 취소할 시
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    const blob = new Blob([JSON.stringify({})], {
      type: "application/json",
    });

    formData.append("data", blob);

    const select = "image";

    dispatch(updateMember({ formData, select }));
  };

  useEffect(() => {
    dispatch(getProfileThunk(memberId));
  }, [dispatch, memberId]);

  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileImage img={image} imgUrl={memberProfile?.profileImgUrl}>
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
          <p>{memberProfile?.nickname}</p>
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
  background-image: url(${(props) => (props.img ? props.img : props.imgUrl)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 100px;

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
    margin: 0;
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
