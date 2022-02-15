<template>
	<h1>我是APP组件</h1>
	<h2>{{ name }}</h2>
	<h2>{{ age }}</h2>
	<h2>{{ sex }}</h2>
	<button @click="sayHello">说话</button>
	<button @click="sayWelcome">说话2</button>
	<button @click="test1">说话3</button>
</template>

<script>
// import { h } from 'vue'
export default {
	name: 'App',
	data() {
		return {
			sex: '男'
		}
	},
	methods: {
		sayWelcome() {
			alert('welcome')
		},
		test1() {
			console.log(this.sex)
			console.log(this.name)
			console.log(this.age)
			console.log(this.sayHello)
		}
	},
	setup() {
		let name = '123'
		let age = '123'

		// 方法
		function sayHello() {
			alert(`${name} ${age}`)
		}
		function test2() {
			console.log(sex)
			console.log(name)
			console.log(age)
			console.log(sayHello)
		}
		return {
			name,
			age,
			sayHello,
			test2
		}

		// 返回一个渲染函数,要import { h } from 'vue'
		// return () => h('h1', 'abc')
	}
}
</script>
