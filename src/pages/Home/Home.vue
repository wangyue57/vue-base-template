<template>
  <div>
    <AnVueComponent/>
  </div>
</template>

<script>
  import { debounce } from '../../common/utils'
  import { vuexMixin } from '../../common/mixins'
  import AnVueComponent from '../../common/components/AnVueComponent'

  export default {
    name: 'Home',
    mixins: [vuexMixin],
    components: {AnVueComponent},
  }
</script>

<style scoped>

</style>
