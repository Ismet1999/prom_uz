<template>
  <div>
    <div class="p-2">
      <BFormInput
        v-model="search"
        placeholder="Enter a book title"
        @input="searchBooks"
      />
    </div>
    <div class="p-2">
      <BCard no-body>
        <BTable
          show-empty
          responsive
          striped
          hover
          :items="books"
          :fields="fields"
        >
          <template #cell(image)="props">
            <img :src="getBookImage(props.item)" width="100" />
          </template>
        </BTable>
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
          key: 'volumeInfo.title',
          label: 'Title',
        },
        {
          key: 'volumeInfo.authors',
          label: 'Authors',
          formatter: (value) => {
            return value && value.join(', ')
          },
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
    searchBooks() {
      const req = {
        params: {
          q: this.search,
        },
      }

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.$store.dispatch('home/FETCH_BOOKS', req)
      }, 500)
    },
    getBookImage(val) {
      return val?.volumeInfo?.imageLinks?.smallThumbnail
    },
  },
}
</script>
