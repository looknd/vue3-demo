<template>
  <div class="hello">
    <h1 style="display: none;">{{ msg }}</h1>
      <a-space>
        <a-button>K线WS</a-button>
        <a-button>行情数据</a-button>
        <a-button>深度数据</a-button>
      </a-space>
  </div>
</template>

<!-- script setup 模式 -->
<script setup>
import {defineProps} from 'vue'
defineProps({
  msg:String
})
// defineProps(['msg'])
</script>
<!-- <script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
