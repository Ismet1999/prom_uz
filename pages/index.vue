<template>
  <div>
    <div class="p-2">
      <BFormInput placeholder="Enter a book title" />
    </div>

    <div class="p-2">
      <BCard no-body>
        <BTable
          responsive
          striped
          hover
          :items="books"
          :fields="fields"
        ></BTable>
      </BCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      search: '',
      timeOut: null,
      fields: [
        {
          key: 'image',
          label: 'Image',
        },
        {
          key: 'title',
          label: 'Title',
        },
        {
          key: 'author',
          label: 'Author',
        },
      ],
    }
  },
  computed: {
    books() {
      return this.$store.state.home.books
    },
  },
  methods: {
    getBooks() {
      if (this.search.length > 2) {
        const req = {
          params: {
            q: this.search,
          },
        }
        this.timeOut = setTimeout(() => {
          clearTimeout(this.timeOut)
          this.$store.dispatch('home/FETCH_BOOKS', req)
        }, 300)
      }
    },
  },
}
</script>
