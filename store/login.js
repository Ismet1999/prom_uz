export const state = () => ({
  token: 'qwerqwerqwerqwer',
})

export const actions = {
  LOGIN({ state }, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data?.token === state.token) {
          resolve()
        } else {
          // eslint-disable-next-line
          reject()
        }
      }, 3000)
    })
  },
}
