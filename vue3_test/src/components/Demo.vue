<template>
	<h2>当前求和为:{{ sum }}</h2>
	<button @click="sum++">+1</button>
	<hr />
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
	name: 'Demo',
	setup() {
		let sum = ref(0)
		return {
			sum
		}
	}
}
</script>
