<template>
	<div>
	  <Header />
	  <div class="about-us container mx-auto p-6">
		<h1 class="text-4xl font-bold text-center mb-8">{{ $t('about.title') }}</h1>
		<p class="text-lg text-justify mb-4">{{ $t('about.description1') }}</p>
		<p class="text-lg text-justify mb-4">{{ $t('about.description2') }}</p>
		<p class="text-lg text-justify mb-4">{{ $t('about.description3') }}</p>
		<p class="text-lg text-center font-semibold mt-6">{{ $t('about.slogan') }}</p>
		
		<!-- LinkedIn Profiles -->
		<div class="linkedin-links mt-10">
		  <h2 class="text-2xl font-bold text-center mb-6">{{ $t('about.team') }}</h2>
		  <ul class="flex flex-wrap justify-center space-x-4">
			<li v-for="member in teamMembers" :key="member.name" class="text-center">
			  <a :href="member.linkedin" target="_blank" class="text-indigo-600 hover:text-indigo-800">
				{{ member.name }}
			  </a>
			</li>
		  </ul>
		</div>
	  </div>
	  <Footer />
	</div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const { t } = useI18n();
  
  // Definir los miembros del equipo con sus enlaces de LinkedIn
  const teamMembers = [
	{ name: t('Elías Riquelme'), linkedin: 'https://www.linkedin.com/in/elias-javier-riquelme-b62655297/' },
	{ name: t('Oussama Brahmi'), linkedin: 'https://www.linkedin.com/in/oussama-brahmi-b1551a280/' },
	{ name: t('Sebastián Rodriguez'), linkedin: 'https://www.linkedin.com/in/johan-sebastian-rodriguez-g/' },
	{ name: t('Tina Calleja'), linkedin: 'https://www.linkedin.com/in/tina-calleja/' }
  ];
  </script>
  
  <style scoped>
  .about-us {
	max-width: 800px;
	margin: 0 auto;
  }
  
  .linkedin-links ul {
	list-style: none;
	padding: 0;
  }
  </style>
  