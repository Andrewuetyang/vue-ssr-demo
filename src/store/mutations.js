import Vue from 'vue'

export default {
  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user.data.name || false) /* false means user not found */
  }
}
