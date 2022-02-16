<template>
	<h1>我是APP组件</h1>
	<h2>{{ person.name }}</h2>
	<h2>{{ person.age }}</h2>
	<h2>{{ person.job.type }}</h2>
	<h2>{{ person.job.salary }}</h2>
	<h2>{{ person.hobby }}</h2>
	<button @click="changeInfo">更新信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
	name: 'App',
	setup() {
		// let name = ref('123')
		// let age = ref('123')
		// let job = reactive({
		// 	type: 'type',
		// 	salary: '30'
		// })

		// let hobby = reactive(['1', '2', '3'])

		let person = reactive({
			name: 'abc',
			age: 30,
			job: {
				type: 'type',
				salary: '123'
			},
			hobby: ['1', '2', '3']
		})

		function changeInfo() {
			// name.value = 'xxx'
			// age.value = 99
			// job.value.type = 'TYPE'
			// job.value.salary = 999
			// console.log(job)
			// job.type = 'da5s4da6s4d'
			// hobby[1]='12312312'

			person.name = '123123'
			person.age = 3123120
		}
		return {
			person,
			// name,
			// age,
			changeInfo
			// hobby,
			// job
		}
	}
}
</script>
