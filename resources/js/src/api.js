const axios = window.axios;

export default {
    getAllPeeps: () => {
        return axios.get("/api/peeps");
    },
    getSinglePost: (id) => axios.get(`/api/posts/${id}`),
    addPost: (daPost) => axios.post(`/api/posts`, daPost),
    updatePost: (daPost, id) => axios.put(`/api/posts/${id}`, daPost),
    registerUser: (user) => axios.post("/api/register", user),
    loginUser: (user) => axios.post("/api/login", user),
    logOutUser: () => axios.post("/api/logout"),
    getLoggedInUser: () => axios.get("/api/getuser"),
};
