<script setup lang="ts">
defineEmits(['toggle-menu'])
</script>

<template>
  <v-app-bar
    app
    color="#323A4C"
    dark
    height="100"
    class="elevation-2"
    style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px"
  >
    <v-btn icon @click="$emit('toggle-menu')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title class="d-flex align-center">
      <v-img
        src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202503171541"
        alt="Logo FURIA"
        max-height="50"
        contain
        class="me-3"
      />
      Chatbot
    </v-toolbar-title>
  </v-app-bar>
</template>
