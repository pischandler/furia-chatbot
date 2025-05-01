<script setup lang="ts">
import { ref } from 'vue'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatInput from '@/components/ChatInput.vue'
import PantherLoading from '@/components/PantherLoading.vue'

const drawer = ref(false)

const messages = ref([{ from: 'bot', text: 'Olá! Sou o chatbot da FURIA. Pergunte algo!' }])
const isLoading = ref(false)

const shortcuts = ['Próximo jogo', 'Elenco', 'Melhor jogador', 'História da FURIA']

function sendMessage(text) {
  if (!text.trim()) return

  messages.value.push({ from: 'user', text })
  simulateBotResponse()
}

function sendShortcut(shortcut) {
  sendMessage(shortcut)
}

function simulateBotResponse() {
  isLoading.value = true

  setTimeout(() => {
    messages.value.push({ from: 'bot', text: 'Aqui está sua resposta sobre FURIA! 🐾' })
    isLoading.value = false
  }, 1500)
}
</script>

<template>
  <!-- Menu Lateral -->
  <SideMenu v-model="drawer" :shortcuts="shortcuts" @shortcut="sendShortcut" />

  <!-- Cabeçalho -->
  <AppHeader @toggle-menu="drawer = !drawer" />

  <!-- Conteúdo Principal -->
  <v-main class="pa-4">
    <ChatMessages :messages="messages" />
    <PantherLoading v-if="isLoading" />
  </v-main>

  <!-- Rodapé -->
  <v-footer app class="pa-3 footer-dark">
    <ChatInput @send="sendMessage" />
  </v-footer>
</template>

<style scoped>
.footer-dark {
  background-color: var(--color-background) !important;
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
}
</style>
