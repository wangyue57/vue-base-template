import axios from 'axios'

const http = axios.create({
  baseURL: '/vue-base',
})
http.interceptors.response.use(
  response => response,
  ({config, response}) => {
    alert(`系统错误：${config.url.split('/').pop()} ${response.status} ${response.statusText}`)
  }
)

export default {
  anAction ({state, commit}, args = {}) {
    const {data, callback} = args
    http.post('/url', {...data, id: state.someState.id,}).then(({data}) => {
      if (data.success) {
        commit('setState', {someState: data.someState})
        callback && callback()
      } else {
        alert(data.message)
      }
    })
  },
}
