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
        class="custom-text-field"
      />
    </v-col>
    <v-col cols="2">
      <v-btn icon @click="send">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style>
.custom-text-field input {
  background-color: #303030 !important;
  color: white !important;
  border-radius: 9999px !important;
  padding: 10px 14px;
  height: 100%;
  box-sizing: border-box;
}
</style>
