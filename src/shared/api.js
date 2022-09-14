import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  const accesstokenexpiretime = localStorage.getItem("accesstokenexpiretime");
  config.headers["Authorization"] = token ? `${token}` : null;
  config.headers["RefreshToken"] = refreshToken ? `${refreshToken}` : null;
  config.headers["AccessTokenExpireTime"] = accesstokenexpiretime
    ? `${accesstokenexpiretime}`
    : null;
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    console.log(error);
    if (error.response.status === 401) {
      try {
        // const email = localStorage.getItem("email");
        const memberId = localStorage.getItem("memberId");
        const originalRequest = error.config;
        console.log(originalRequest);
        // const data = await api.post("/members/refresh-token", { email: email });
        const data = await api.post("/members/refresh-token", {
          memberId: memberId,
        });
        // const data = getRefreshToken({ email: email });
        console.log(data);
        if (data) {
          const newToken = data.headers.authorization;
          const newAccesstokenexpiretime = data.headers.accesstokenexpiretime;
          localStorage.removeItem("token");
          localStorage.removeItem("accesstokenexpiretime");
          localStorage.setItem("token", newToken);
          localStorage.setItem(
            "accesstokenexpiretime",
            newAccesstokenexpiretime
          );
          originalRequest.headers["Authorization"] = newToken;
          return await api.request(originalRequest);
        }
      } catch (error) {
        console.log(error);
      }
      return Promise.reject(error);
    } else if (error.response.status === 503) {
      console.log("503 받았어요");
    }
    return Promise.reject(error);
  }
);

// const getRefreshToken = async (data) => {
//   await api.post("/members/refresh-token", data);
// };

export const apis = {
  // SignUp
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

  // loginIn
  loginMember: (data) =>
    api.post("/members/login", data, {
      "Content-Type": "application/json",
    }),

  loginKakao: (code) => api.get(`/members/login/kakao/callback?code=${code}`),

  recommendMember: () => api.get("/members/suggest"),

  followMember: (memberId) => api.post(`/follow/${memberId}`),

  followerMember: (memberId) => api.get(`/follow/${memberId}/followers`),

  followingMember: (memberId) => api.get(`/follow/${memberId}/followings`),

  // Categories
  getCategories: (data) => api.get(`/categories?date=${data}`),

  postCategories: () => api.post("/categories"),

  // Todo
  createTodo: (data) =>
    api.post(
      `categories/${data.addTodoObj.categId}/todos`,
      data.addTodoObj.todoReq
    ),

  updateTodo: (data) =>
    api.patch(
      `categories/todos/${data.updateTodoObj.todoId}`,
      data.updateTodoObj.todoReq
    ),

  deleteTodo: (data) => api.delete(`categories/todos/${data}`),
};
