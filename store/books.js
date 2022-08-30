import { fetchBooksByTitle } from '@/api/books'

export const state = () => ({
  books: [],
})

export const mutations = {
  SET_BOOK_LIST(state, books) {
    state.books = books
  },
}
export const actions = {
  FETCH_BOOKS({ commit }, data) {
    return new Promise((resolve, reject) => {
      fetchBooksByTitle
        .call(this, data)
        .then((r) => {
          commit('SET_BOOK_LIST', r.items)
          resolve(r)
        })
        .catch(reject)
    })
  },
}

export const getters = {
  GET_BOOKS: (state) => state.books,
}
