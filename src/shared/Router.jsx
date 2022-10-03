import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogoPage from "../pages/LogoPage";
import LogoPageFix from "../pages/LogoPageFix";
import LogInPage from "../pages/LogInPage";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import DlyTodo from "../pages/DlyTodo";
import Kakao from "./Kakao";
import Search from "../pages/Search";
import Follow from "../pages/Follow";
import Category from "../pages/Category";
import CategoryDetail from "../pages/CategoryDetail";
import WklyTodo from "../pages/WklyTodo";
import CreatePlanet from "../pages/CreatePlanet";
import TimerPage from "../pages/TimerPage";
import MyPage from "../pages/MyPage";
import NickName from "../components/mypage/NickName";
import Password from "../components/mypage/Password";
import NotFoundPage from "../pages/NotFoundPage";
import MaintPage from "../pages/MaintPage";
<<<<<<< HEAD
import Statistic from "../pages/Statistic";
=======
import LogoPageFix from "../pages/LogoPageFix";
>>>>>>> f3b01ab9980bafddedc85564217f4e1b163928c0

const Router = () => {
  return (
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/maintPage" element={<MaintPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dlytodo" element={<DlyTodo />} />
        <Route path="/wklytodo" element={<WklyTodo />} />
        <Route path="/login/kakao" element={<Kakao />} />
        <Route path="/search" element={<Search />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/createplanet" element={<CreatePlanet />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/nickname" element={<NickName />} />
        <Route path="/password" element={<Password />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categorydetail/:id" element={<CategoryDetail />} />
        <Route path="*" element={<LogoPageFix />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
=======
    <Routes>
      <Route path="/" element={<LogoPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="/maintPage" element={<MaintPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dlytodo" element={<DlyTodo />} />
      <Route path="/wklytodo" element={<WklyTodo />} />
      <Route path="/login/kakao" element={<Kakao />} />
      <Route path="/search" element={<Search />} />
      <Route path="/follow" element={<Follow />} />
      <Route path="/createplanet" element={<CreatePlanet />} />
      <Route path="/timerpage" element={<TimerPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/nickname" element={<NickName />} />
      <Route path="/password" element={<Password />} />
      <Route path="/category" element={<Category />} />
      <Route path="/categorydetail/:id" element={<CategoryDetail />} />
      <Route path="*" element={<LogoPageFix />} />
    </Routes>
>>>>>>> f3b01ab9980bafddedc85564217f4e1b163928c0
  );
};

export default Router;

