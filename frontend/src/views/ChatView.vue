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

const faq: Record<string, string> = {
  'Próximo jogo':
    'A FURIA estreia no PGL Major Astana 2025, que acontecerá de 10 a 18 de maio. Ainda não há confirmação do adversário da estreia.',
  'Elenco':
    'O elenco atual da FURIA conta com yuurih, KSCERATO, FalleN, molodoy e YEKINDAR (stand-in).',
  'Melhor jogador':
    'KSCERATO é amplamente reconhecido como o jogador mais consistente e impactante da FURIA em 2025.',
  'História da FURIA':
    'Fundada em 2017, a FURIA rapidamente se destacou no cenário internacional de CS:GO. Em 2022, alcançou as semifinais do IEM Rio Major, sua melhor campanha em Majors até hoje. A organização também expandiu para outras modalidades, como Rocket League, Valorant e futebol 7, consolidando-se como uma das maiores potências dos esports no Brasil.',
  'Quem são os donos da FURIA?':
    'A FURIA foi fundada por Jaime Pádua, André Akkari e Cristian Guedes. Jaime Pádua atua como CEO, André Akkari é co-CEO e Cristian Guedes é cofundador e responsável pelo marketing e relações públicas da organização.',
  'FURIA na Kings League':
    'A FURIA FC participa da Kings League Brazil, uma liga de futebol 7. O time é presidido por Neymar Jr., que também participa ativamente das decisões e eventos da equipe.',
  'FURIA no League of Legends':
    'A equipe de League of Legends da FURIA compete no CBLOL e atualmente conta com os jogadores JoJo, Guigo, Tutsz, Tatu e Ayu, todos brasileiros.',
  'FURIA no Valorant':
    'A divisão de Valorant da FURIA foi estabelecida em janeiro de 2021 e já participou de diversos torneios internacionais, incluindo o VCT Champions. O elenco atual inclui jogadores como khalil, havoc, pryze, heat e raafa.',
  'FURIA em outras modalidades':
    'Além de CS:GO, League of Legends e Valorant, a FURIA também possui equipes em jogos como Rocket League, Rainbow Six Siege, Apex Legends, PUBG Mobile e Super Smash Bros.',
  'Redes sociais da FURIA':
    'Você pode seguir a FURIA nas redes sociais através do X (antigo Twitter) @FURIA e no Instagram @furia.football para acompanhar as novidades da equipe na Kings League.',
}

const shortcuts = Object.keys(faq)

function sendMessage(text: string) {
  if (!text.trim()) return

  messages.value.push({ from: 'user', text })

  const answer = faq[text]
  isLoading.value = true

  setTimeout(() => {
    if (answer) {
      messages.value.push({ from: 'bot', text: answer })
    } else {
      messages.value.push({ from: 'bot', text: 'Desculpe, não entendi. Tente outra pergunta.' })
    }
    isLoading.value = false
  }, 1000)
}

function sendShortcut(shortcut: string) {
  sendMessage(shortcut)
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

  <v-footer app class="pa-3 footer-dark">
    <v-row class="mb-2" dense>
      <v-col v-for="shortcut in shortcuts" :key="shortcut" cols="auto">
        <v-btn
          variant="outlined"
          rounded
          size="small"
          class="text-capitalize"
          @click="sendShortcut(shortcut)"
        >
          {{ shortcut }}
        </v-btn>
      </v-col>

      <v-col cols="12">
        <ChatInput @send="sendMessage" />
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer-dark {
  background-color: var(--color-background) !important;
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
}
</style>
