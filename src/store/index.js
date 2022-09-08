import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
    isAuth: false,
  },
  getters: {},
  mutations: {
    loginUser(state, user) {
      console.log("loginUser mutation fired!", user);
      state.user = user;
    },

    toggleError(state, msg) {
      console.log("toggleError mutation fired", msg);
      state.error = msg;
      setTimeout(() => {
        state.error = "";
      }, 2500);
    },

    logoutUser(state) {
      state.user = {};
    },
  },
  actions: {
    async login({ commit }, user) {
      console.log("user", user);
      let response = await fetch(`http://localhost:3000/users`);
      let data = await response.json();
      let existingUser = data.filter((d) => d.username === user.username);
      if (!existingUser.length) {
        commit("toggleError", "Error, user doesn't exist here! :(");
      } else if (existingUser[0].password !== user.password) {
        commit("toggleError", "Unauthorized access. Bad passwd");
      } else {
        console.log("Data", data);
        localStorage.setItem(
          "auth-user",
          JSON.stringify({
            id: existingUser[0].id,
            username: existingUser[0].username,
            cookie: "zidei2izKdkeipeKdojg2924kdjf128dk",
          })
        );
        commit("loginUser", existingUser[0]);
        router.push("/home");
      }
    },

    logout({ commit }) {
      console.log("logout user fired!");
      localStorage.clear();
      commit("logoutUser");
      router.push("/login");
    },
  },
  modules: {},
});
