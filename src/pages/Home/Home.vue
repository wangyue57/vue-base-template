<template>
  <div>
    <AnVueComponent/>
    this is {{date.toISOString()}}
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
    data: () => ({
      timer: null,
      date: new Date
    }),
    methods: {
      refreshDate () {
        this.date = new Date
      }
    },
    created () {
      this.refreshDate = this.refreshDate.bind(this)
    },
    mounted () {
      this.timer = setInterval(this.refreshDate, 100)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>

</style>
