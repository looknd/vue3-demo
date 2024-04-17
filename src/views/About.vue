<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ double }}</span>  <br>
    <span>{{ count }}</span>
    <p>
      <button @click="increment">增加</button>
    </p>
  </div>
</template>
<script>
import {computed} from 'vue'
import { useCounterStore } from '../store/index'
export default {
  setup() {
    const users = useCounterStore()
    const handleClick = ()=>{
      users.increment()
    }
    return{
      double:computed(()=> users.double),
      count:computed(()=> users.count),
      increment:handleClick
    }
  },
}
</script>