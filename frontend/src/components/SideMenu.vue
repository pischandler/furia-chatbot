<script setup lang="ts">
import { ref, watch } from 'vue'
import furiaLogo from '@/assets/furia_logo.png'

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
  <v-navigation-drawer v-model="internalDrawer" app class="drawer-fix" color="transparent">
    <v-list>
      <!-- Substitua o título "Atalhos" pelo logo da FURIA -->
      <v-list-item>
        <v-img :src="furiaLogo" alt="Logo FURIA" contain max-width="90px" class="ma-4" />
      </v-list-item>

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

<style scoped>
/* Sobrescrevendo fundo do menu lateral */
.drawer-fix {
  --v-theme-surface: #171717 !important;
  background-color: #171717 !important;
  color: white;
}

.drawer-fix .v-navigation-drawer__content,
.drawer-fix .v-sheet,
.drawer-fix .v-list {
  background-color: #171717 !important;
}
</style>
