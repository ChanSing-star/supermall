import { debounce } from 'common/utils'

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 0)

    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    console.log('我是混入')
  }
}