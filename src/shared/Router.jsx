import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";
import CreTodo from "../pages/CreTodo";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/cretodo" element={<CreTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
