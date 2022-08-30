<template>
  <div
    class="
      min-h-screen
      bg-gray-100
      d-flex
      justify-content-center
      align-items-center
      p-1
    "
  >
    <Nuxt />
  </div>
</template>
 
<script>
export default {
  name: 'EmptyLayout',
}
</script>
<style>
.min-h-screen {
  min-height: 100vh;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}
</style>
