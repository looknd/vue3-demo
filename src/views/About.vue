<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ double }}</span>  <br>
    <span>{{ count }}</span>
    <p class="space">
      <span>
        <button @click="increment">增加</button>
      </span>
      <span>
        <button @click="reduce">减少</button>
      </span>
    </p>
  </div>
</template>
<script>
import {computed} from 'vue'
import { useCounterStore } from '../store/index'
export default {
  setup() {
    const users = useCounterStore()
    const increment = ()=>{
      users.increment()
    }
    const reduce = ()=>{
      users.reduce()
    }
    return{
      double:computed(()=> users.double),
      count:computed(()=> users.count),
      increment,
      reduce
    }
  },
}
</script>