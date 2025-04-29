<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const emit = defineEmits(['send'])

function send() {
  if (text.value.trim() !== '') {
    emit('send', text.value)
    text.value = ''
  }
}
</script>

<template>
  <v-row no-gutters align="center">
    <v-col cols="10" class="pe-2">
      <v-text-field
        v-model="text"
        placeholder="Digite sua mensagem..."
        hide-details
        density="compact"
        rounded
        variant="outlined"
      />
    </v-col>
    <v-col cols="2">
      <v-btn color="black" block @click="send">
        Enviar
      </v-btn>
    </v-col>
  </v-row>
</template>
