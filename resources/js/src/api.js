const axios = window.axios;

export default {
    getAllPeeps: () => {
        return axios.get("/api/peeps");
    },
    getSinglePeep: (id) => axios.get(`/api/peeps/${id}`),
    addPeep: (theMessage) => axios.post(`/api/peeps`, theMessage),
    updatePost: (daPost, id) => axios.put(`/api/posts/${id}`, daPost),
    registerUser: (user) => axios.post("/api/register", user),
    loginUser: (user) => axios.post("/api/login", user),
    logOutUser: () => axios.post("/api/logout"),
    getLoggedInUser: () => axios.get("/api/getuser"),
};
