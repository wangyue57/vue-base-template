import state from '../../store/state'
import actions from '../../store/actions'
import mutations from '../../store/mutations'
import { mapMutations, mapState, mapActions } from 'vuex'

export const vuexMixin = {
  computed: mapState(Object.keys(state)),
  methods: {
    ...mapActions(Object.keys(actions)),
    ...mapMutations(Object.keys(mutations)),
  }
}
