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
    // When 400 error occur, redirect to maintPage
    if (error.response.status === 404) {
      window.location.replace("/maintPage");
    } else if (error.response.status === 501) {
      window.location.replace("/notfound");
    } else if (error.response.status === 401) {
      try {
        const memberId = localStorage.getItem("memberId");
        const originalRequest = error.config;
        console.log(originalRequest);
        const data = await api.post("/members/refresh-token", {
          memberId: memberId,
        });
        if (data.data.success === true) {
          const newToken = data.headers.authorization;
          const newAccesstokenexpiretime = data.headers.accesstokenexpiretime;
          const refreshtoken = data.headers.refreshtoken;
          localStorage.removeItem("token");
          localStorage.removeItem("accesstokenexpiretime");
          localStorage.removeItem("refreshToken");
          localStorage.setItem("token", newToken);
          localStorage.setItem(
            "accesstokenexpiretime",
            newAccesstokenexpiretime
          );
          localStorage.setItem("refreshToken", refreshtoken);
          originalRequest.headers["Authorization"] = newToken;
          return await api.request(originalRequest);
        }
      } catch (error) {
        console.log(error);
        localStorage.clear();
        window.location.replace("login");
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

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

  // memberupdate

  memberUpdate: (data) =>
    api.patch("/members", data, {
      "Content-Type": "multipart/form-data",
    }),

  // mypage
  mypageProfile: (id) => api.get(`members/${id}/status`),

  // follow & search
  recommendMember: () => api.get("/members/suggest"),

  followMember: (memberId) => api.post(`/follow/${memberId}`),

  followerMember: (memberId) => api.get(`/follow/${memberId}/followers`),

  followingMember: (memberId) => api.get(`/follow/${memberId}/followings`),

  // Categories
  getCategories: (data) => api.get(`/categories?date=${data}`),

  getOnlyCategorie: () => api.get(`/categories/menu`),
  // .then(response =>{
  //   console.log("Check getOnlyCate api resposne", response)
  // })
  postCategories: (data) => api.post("/categories", data),

  deleteCategories: (data) => api.delete(`/categories/${data}`),

  updateCategories: (id, data) => api.patch(`/categories/${id}`, data),

  // Todo
  createTodo: (data) =>
    api.post(
      `categories/${data.addTodoObj.categId}/todos`,
      data.addTodoObj.todoReq
    ),

  updateTodoTi: (data) =>
    api.patch(
      `categories/todos/${data.updateTodoTiObj.todoId}`,
      data.updateTodoTiObj.todoReq
    ),

  updateTodoCk: (data) =>
    api.patch(
      `categories/todos/${data.updateTodoCkObj.todoId}`,
      data.updateTodoCkObj.todoReq
    ),

  updateTodoDate: (data) =>
    api.patch(`categories/todos/${data.todoId}`, data.todoReq),

  updateTodoMemo: (data) =>
    api.patch(
      `categories/todos/${data.updateTodoMemoObj.todoId}`,
      data.updateTodoMemoObj.todoReq
    ),

  deleteTodo: (data) => api.delete(`/categories/todos/${data}`),

  // TodoList
  postTodoList: (data) => api.post(`/todo-list/today?dueDate=${data}`),

  // Planet
  getWeekPlanets: (data) => api.get(`/todo-list/weekly?startDate=${data}`),

  getDayPlanet: (data) => api.get(`/todo-list/daily?dueDate=${data}`),

  postPlanet: (data) =>
    api.post(
      `/todo-list?dueDate=${data.parsedCurrDate}&planetType=${data.planetType}`
    ),

  updatePlanet: (data) => api.patch("/todo-list", data),

  //timer
  postTimer: (data) => api.post("/timer", data),
};
