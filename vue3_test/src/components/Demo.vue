<template>
	<h2>当前求和为:{{ sum }}</h2>
	<button @click="sum++">+1</button>
	<h2>{{ msg }}</h2>
</template>

<script>
import { ref, watch } from 'vue'
export default {
	name: 'Demo',
	setup() {
		let sum = ref(0)

		watch(sum, (val, old) => {
			console.log(val, old)
		})
		return {
			sum
		}
	}
}
</script>
