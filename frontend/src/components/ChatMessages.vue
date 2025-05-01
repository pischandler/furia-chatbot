<script setup>
defineProps({
  messages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex flex-column ga-2 px-2" style="height: 100%; overflow-y: auto">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="pa-1"
      :class="msg.from === 'bot' ? 'justify-start' : 'justify-end'"
    >
      <div class="d-flex" :class="msg.from === 'bot' ? 'justify-start' : 'justify-end'">
        <v-card
          class="pa-3"
          :class="msg.from === 'bot' ? 'bg-grey-darken-3 text-white' : 'bg-grey-lighten-3'"
          style="max-width: 60%; word-break: break-word"
        >
          {{ msg.text }}
        </v-card>
      </div>
    </div>
  </div>
</template>
