import axios from "axios";
import { createDispatchHook } from "react-redux";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token = localStorage.getItem("token");
api.defaults.headers.common["authorization"] = token ? `${token}` : null;

export const apis = {
  createMember: (data) =>
    api.post("/members/register", data, {
      "Content-Type": "application/json",
    }),

  checkEmail: async (email) =>
    await api.post("/members/register/check-email", email),

  checkNickname: async (nickname) =>
    await api.get("/members/nickname-check", {
      params: { nickname: nickname },
    }),

  loginMember: (data) =>
    api.post("/members/login", data, {
      "Content-Type": "application/json",
    }),

  getAllMembers: () => api.get("/members"),

  getOneMemberProfile: (memberId) => api.get(`/api/profile/${memberId}`),

  getAllPosts: () => api.get("/api/posts"),

	getInfiniteScrollPosts: (page, size) => api.get("api/posts/infinite-scroll", {
		params: {
			page: page,
			size: size,
			sort: "createdAt,desc"
		}
	}),

  getOnePost: (postId) => api.get(`/api/posts/${postId}`),

  writePost: (data) =>
    api.post("/api/posts", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  editPost: (data, postId) =>
    api.put(`/api/posts/${postId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  removePost: (postId) => api.delete(`/api/posts/${postId}`),

  getCommentsByPost: (postId) => api.get(`/api/posts/${postId}/comments`),

  writeComment: (data, postId) =>
    api.post(`/api/posts/${postId}/comments`, data, {
      "Content-type": "application/json",
    }),

  removeComment: (postId, commentId) =>
    api.delete(`/api/posts/${postId}/comments/${commentId}`),

  pressLike: (postId) => api.post(`/api/posts/${postId}/likes`),

  editMyPage: (memberId, data) =>
    api.put(`/api/profile/${memberId}`, data, {
      "Content-Type": "multipart/form-data",
    }),

	pressFollow: (memberId) => api.post(`api/follow/${memberId}`), 
};
