<template>
  <div class="about">
    <h3>{{title}}</h3>
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
<!-- script setup模式 -->
<script setup>
import {ref,computed} from 'vue'
import { useCounterStore } from '../store/index'

const title = ref('示例组件')
const users = useCounterStore()
// 增加
const increment = ()=>{
  users.increment()
}
// 减少
const reduce = ()=>{
  users.reduce()
}
// const double=computed(()=> users.double)
const count=computed(()=> users.count)
</script>

<!-- setup 勾子模式 -->
<!-- <script>
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
</script> -->