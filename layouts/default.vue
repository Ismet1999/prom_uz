<template>
  <div>
    <Nuxt />
  </div>
</template>
 

 <script>
export default {
  name: 'DefaultLayout',
  beforeCreate() {
    if (process.client) {
      this.$store.dispatch('login/IS_AUTHENTICATED').then((r) => {
        if (!r) {
          this.$router.push('/login')
        }
      })
    }
  },
}
</script>