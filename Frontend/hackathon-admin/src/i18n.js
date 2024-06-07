// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// Mensajes de ejemplo
const messages = {
  en: en,
  es: es
};

// Crear la instancia de i18n
const i18n = createI18n({
  locale: 'en', // Idioma por defecto
  messages,
});

export default i18n;
