<template>
    <div class="col-xs-12 col-sm-6">
        <p style= "display: inline-flex;">Server id: {{ currentServer.id }} | Server Status: {{ currentServer.status }}</p>
        <button @click="makeNormal()" style= "display: inline-flex;">Make Normal</button>
    </div>

</template>

<script>
  import { eventBus } from '../../main';
  export default {
    data: function() {
      return {
        currentServer: {id: '', status: ''}
      }
    },
    methods: {
      makeNormal() {
        this.currentServer.status = 'Normal';
      }
    },
    created() {
      eventBus.$on('serverChosen', (serverDetails) => {
        this.currentServer = serverDetails;
      })
    }
  }
</script>

<style>

</style>
