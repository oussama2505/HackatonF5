<template>
	<div>
	  <Header />
	  <div class="contact-us container mx-auto p-6">
		<h1 class="text-4xl font-bold text-center mb-8">{{ $t('contact.title') }}</h1>
		<form @submit.prevent="submitForm" class="space-y-4 max-w-lg mx-auto">
		  <div>
			<label for="name" class="block text-lg font-medium mb-2">{{ $t('contact.name') }}</label>
			<input v-model="form.name" type="text" id="name" class="w-full p-2 border rounded" required />
		  </div>
		  <div>
			<label for="email" class="block text-lg font-medium mb-2">{{ $t('contact.email') }}</label>
			<input v-model="form.email" type="email" id="email" class="w-full p-2 border rounded" required />
		  </div>
		  <div>
			<label for="subject" class="block text-lg font-medium mb-2">{{ $t('contact.subject') }}</label>
			<input v-model="form.subject" type="text" id="subject" class="w-full p-2 border rounded" required />
		  </div>
		  <div>
			<label for="message" class="block text-lg font-medium mb-2">{{ $t('contact.message') }}</label>
			<textarea v-model="form.message" id="message" class="w-full p-2 border rounded" rows="5" required></textarea>
		  </div>
		  <button type="submit" class="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-800">{{ $t('contact.submit') }}</button>
		</form>
	  </div>
	  <Footer />
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const { t } = useI18n();
  
  const form = ref({
	name: '',
	email: '',
	subject: '',
	message: ''
  });
  
  const submitForm = () => {
	// Here you can handle the form submission, for example by sending the data to an API.
	alert('Formulario enviado:\n' + JSON.stringify(form.value, null, 2));
	
	// Clear the form
	form.value.name = '';
	form.value.email = '';
	form.value.subject = '';
	form.value.message = '';
  };
  </script>
  
  <style scoped>
  .contact-us {
	max-width: 800px;
	margin: 0 auto;
  }
  
  input, textarea {
	width: 100%;
	padding: 10px;
	margin-top: 5px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
  }
  
  button {
	display: block;
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #4a90e2;
	color: white;
	font-size: 18px;
  }
  
  button:hover {
	background-color: #357ab8;
  }
  </style>