<template>
	<h1>我是APP组件</h1>
	<h2>{{ name }}</h2>
	<h2>{{ age }}</h2>
	<h2>{{ job.type }}</h2>
	<h2>{{ job.salary }}</h2>
	<button @click="changeInfo">更新信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'App',
	setup() {
		let name = ref('123')
		let age = ref('123')
		let job = ref({
			type: 'type',
			salary: '30'
		})

		function changeInfo() {
			name.value = 'xxx'
			age.value = 99
			job.value.type = 'TYPE'
			job.value.salary = 999
			console.log(name)
		}
		return {
			name,
			age,
			changeInfo,
			job
		}
	}
}
</script>
