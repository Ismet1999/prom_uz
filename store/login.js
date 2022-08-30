export const state = () => ({
  token: 'qwerqwerqwerqwer',
})

export const actions = {
  LOGIN({ state }, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data?.token.toLowerCase() === state.token.toLowerCase()) {
          localStorage.setItem('token', data.token)
          resolve()
        } else {
          // eslint-disable-next-line
          reject()
        }
      }, 3000)
    })
  },
  IS_AUTHENTICATED: (state) => {
    return !!localStorage.getItem('token')
  },
}
