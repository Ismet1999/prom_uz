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
          :items="items"
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
      items: [
        {
          id: 1,
          title: 'Harry Potter',
          author: 'J.K. Rowling',
          year: '1997',
        },
      ],
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
}
</script>
