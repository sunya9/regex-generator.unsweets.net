import '../css/main.css'
import regexgen from 'regexgen'
import Clipboard from 'clipboard'
// buggy?: 'vue/dist/vue' : 'vue/dist/vue.min'
import Vue from 'vue/dist/vue.min'

new Vue({
  el: '#app',
  data: {
    src: ''
  },
  mounted() {
    new Clipboard('[data-clipboard-target]')
  },
  computed: {
    dist() {
      if(!this.src) return ''
      return regexgen(this.src.split('\n')).toString()
    }
  }
})