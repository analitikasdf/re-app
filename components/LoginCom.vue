<template>
	<el-form v-loading="loading" ref="form" :model="form" label-width="120px">
		<h2 class="Title">Авторизация</h2>
		<el-input placeholder="Ваш Email" v-model="$v.form.email.$model"></el-input>
		<div v-if="$v.form.email.$dirty && !$v.form.email.required" class="ErrorText">Это объязательное поле</div>
		<div v-if="$v.form.email.$dirty && !$v.form.email.email" class="ErrorText">Ваш Email неверный</div>
		<el-input placeholder="Ваш пароль" v-model.trim="$v.form.password.$model" show-password></el-input>
		<div v-if="$v.form.password.$dirty && !$v.form.password.required" class="ErrorText">Это объязательное поле</div>
		<div v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="ErrorText">Минимальная длина 8 символов, еще {{ 8 - $v.form.password.$model.length }}</div>
		<div v-if="$v.form.password.$dirty && !$v.form.password.capitalLetter" class="ErrorText">Минимум одна заглавная буква</div>
		<el-button @click="submit" type="primary">Войти</el-button>
	</el-form>
</template>

<script>
import { required, minLength, email, helpers } from 'vuelidate/lib/validators';

const capitalLetter = helpers.regex('capitalLetter', /[A-Z]/);

export default {
	data() {
		return {
			form: {
				email: '',
				password: ''
			},
			submitStatus: null
		};
	},
	validations: {
		form: {
			email: {
				email,
				required
			},
			password: {
				min: 8,
				required,
				minLength: minLength(8),
				capitalLetter
			}
		}
	},
	methods: {
		submit() {
			this.$v.$touch();
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR';
			} else {
				this.submitStatus = 'PENDING';
				setTimeout(() => {
					this.submitStatus = 'OK';
					this.$store.commit('authenticated', true);
					this.$router.push('/');
				}, 2000);
			}
		}
	},
	computed: {
		loading() {
			return this.submitStatus === 'PENDING';
		}
	}
};
</script>

<style lang="scss" >
.Title {
	margin-bottom: 20px;
	text-align: center;
}
.el-form {
	margin: 100px auto;
	padding: 30px 20px;
	max-width: 500px;
	border: 1px solid #dcdfe6;
	border-radius: 30px;
	box-shadow: 10.4px 6.1px 33.5px -19px rgba(0, 0, 0, 0.032), 21.5px 12.6px 45px -19px rgba(0, 0, 0, 0.052), 34.3px 20.1px 55.4px -19px rgba(0, 0, 0, 0.069),
		54.8px 32.1px 73.3px -19px rgba(0, 0, 0, 0.086), 87px 51px 107px -19px rgba(0, 0, 0, 0.12);
	transition: all 250ms cubic-bezier();
}
.ErrorText {
	padding: 0 15px;
	font-size: 10px;
	color: red;
}
.el-input {
	margin: 20px 0px 5px 0px;
}
.el-button {
	display: block;
	margin: 20px auto;
}
.el-loading-mask {
	border-radius: 30px;
}
</style>