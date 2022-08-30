export function fetchBooksByTitle(data) {
  return this.$axios.$get('/books/v1/volumes', {
    params: data.params,
  })
}
