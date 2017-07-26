import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue ({
  methods: {
    chooseServer(serverDetails){
      this.$emit('serverChosen', serverDetails)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
