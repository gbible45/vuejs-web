const ID_TOKEN_KEY = 'id_token'
const USER_INFO_KEY = 'comm.user'

export default {
  getToken () {
    return window.localStorage.getItem(ID_TOKEN_KEY)
  },
  saveToken (token) {
    window.localStorage.setItem(ID_TOKEN_KEY, token)
  },
  destroyToken () {
    window.localStorage.removeItem(ID_TOKEN_KEY)
  },
  getUser () {
    return JSON.parse(window.localStorage.getItem(USER_INFO_KEY))
  },
  saveUser (user) {
    window.localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
  },
  destroyUser () {
    window.localStorage.removeItem(USER_INFO_KEY)
  }
}
