<script setup lang="ts">
import { watch, ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
  shortcuts: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'shortcut', item: string): void
}>()

const internalDrawer = ref(props.modelValue)

watch(internalDrawer, (val) => {
  emit('update:modelValue', val)
})

watch(
  () => props.modelValue,
  (val) => {
    internalDrawer.value = val
  },
)
</script>

<template>
  <v-navigation-drawer v-model="internalDrawer" app>
    <v-list>
      <v-list-item-title class="text-h6 my-3">Atalhos</v-list-item-title>
      <v-list-item
        v-for="item in shortcuts"
        :key="item"
        @click="$emit('shortcut', item)"
        class="pe-2"
      >
        {{ item }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
