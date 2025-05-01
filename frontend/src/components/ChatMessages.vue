<script setup>
defineProps({
  messages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex flex-column ga-2" style="height: 100%; overflow-y: auto">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="pa-2"
      :class="msg.from === 'bot' ? 'text-left' : 'text-right'"
    >
      <v-card class="pa-2 bg-grey-lighten-3">
        <div class="mx-2">{{ msg.text }}</div>
      </v-card>
    </div>
  </div>
</template>
