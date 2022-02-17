<template>
	<h1>123</h1>
	姓: <input type="text" v-model="person.firstName" /> <br />
	名: <input type="text" v-model="person.lastName" /> <br />
	<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue'
export default {
	name: 'Demo',
	setup() {
		let person = reactive({
			firstName: '张',
			lastName: '三'
		})

		// person.fullName = computed(() => {
		// 	return person.firstName + person.lastName
		// })
		person.fullName = computed({
			get() {
				return person.firstName + person.lastName
			},
			set(val) {
				const nameArr = val.split('')
				person.firstName = nameArr[0]
				person.lastName = nameArr[1]
			}
		})

		return {
			person
		}
	}
}
</script>
