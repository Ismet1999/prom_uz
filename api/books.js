export function fetchBooksByTitle(params) {
  return this.$axios.$get('/books/v1/volumes', {
    params,
  })
}
