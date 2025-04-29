<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatInput from '@/components/ChatInput.vue'

const drawer = ref(false)

const messages = ref([{ from: 'bot', text: 'Olá! Sou o chatbot da FURIA. Pergunte algo!' }])

const shortcuts = ['Próximo jogo', 'Elenco', 'Melhor jogador', 'História da FURIA']

function sendMessage(text) {
  if (text.trim()) {
    messages.value.push({ from: 'user', text })
  }
}

function sendShortcut(shortcut) {
  sendMessage(shortcut)
}
</script>

<template>
  <!-- Removi o segundo <v-app> -->

  <!-- Menu lateral controlado com drawer -->
  <v-navigation-drawer v-model="drawer" app width="240">
    <v-list>
      <v-list-item-title class="text-h6 my-3">Atalhos</v-list-item-title>
      <v-list-item v-for="item in shortcuts" :key="item" @click="sendShortcut(item)" class="pe-2">
        {{ item }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Header com botão de abrir menu -->
  <AppHeader @toggle-menu="drawer = !drawer" />

  <!-- Conteúdo principal -->
  <v-main class="pa-4">
    <ChatMessages :messages="messages" />
  </v-main>

  <!-- Rodapé -->
  <v-footer app class="pa-3">
    <ChatInput @send="sendMessage" />
  </v-footer>
</template>
