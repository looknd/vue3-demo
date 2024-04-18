<template>
  <div class="about">
    <div>
      <span>{{ count }}</span>
    </div>
    <div>
      <a-space>
        <a-button type="primary" @click="increment">增加</a-button>
        <a-button type="primary" @click="reduce">减少</a-button>
      </a-space>
    </div>
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