import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "../pages/LogInPage";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";
import CreTodo from "../pages/CreTodo";
import Kakao from "./Kakao";
import Search from "../pages/Search";
import Follow from "../pages/Follow";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/cretodo" element={<CreTodo />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/search" element={<Search />} />
        <Route path="/follow" element={<Follow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
