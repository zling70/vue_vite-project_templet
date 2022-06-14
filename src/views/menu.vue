
<template>
  <div id="content">
    <router-link to="/order">订单</router-link>
  </div>
  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <router-view></router-view>
</template>
<script setup>
import { ref } from 'vue'
//const count = ref(0)

</script>

<style scoped>
a {
  color: #42b983;
}
#content{
  width: 600px;
  height: 50px;
  border-top: red solid 1px;
  margin: auto;
  }
</style>