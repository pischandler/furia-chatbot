<script setup lang="ts">
import logoFuria from '@/assets/header/logo-furia-palavra.png'
import '@/assets/header/style.css'

defineEmits(['toggle-menu'])
</script>

<template>
  <v-app-bar app dark height="100" class="furia-header elevation-2">
    <v-btn icon @click="$emit('toggle-menu')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title class="d-flex align-center">
      <v-img
        :src="logoFuria"
        alt="Logo FURIA"
        max-height="80"
        max-width="200"
        contain
        class="me-2"
      />
      <span class="chatbot-text">Chatbot</span>
    </v-toolbar-title>
  </v-app-bar>
</template>
