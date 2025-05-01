<template>
  <div class="skeleton-container">
    <div v-for="n in 3" :key="n" class="scratch-line" :class="`scratch-${n}`"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
}

.scratch-line {
  height: 40px;
  background: linear-gradient(
    110deg,
    #1a1a1a 8%,
    #2c2c2c 18%,
    #1a1a1a 33%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  position: relative;
  border-radius: 2px;

  clip-path: polygon(
    0% 50%, 5% 40%, 10% 43%, 15% 37%, 20% 45%,
    25% 38%, 30% 60%, 35% 35%, 40% 70%, 45% 32%,
    50% 75%, 55% 32%, 60% 70%, 65% 35%, 70% 60%,
    75% 38%, 80% 45%, 85% 37%, 90% 43%, 95% 40%, 100% 50%,
    95% 60%, 90% 57%, 85% 63%, 80% 55%, 75% 62%,
    70% 40%, 65% 65%, 60% 30%, 55% 68%, 50% 25%,
    45% 68%, 40% 30%, 35% 65%, 30% 40%, 25% 62%,
    20% 55%, 15% 63%, 10% 57%, 5% 60%, 0% 50%
  );
}

/* Leves rotações diferentes para formar um arco */
.scratch-1 {
  transform: rotateZ(-2deg) translateY(2px);
}

.scratch-2 {
  transform: rotateZ(0deg); /* linha do meio reta */
}

.scratch-3 {
  transform: rotateZ(2deg) translateY(-2px);
}

/* Shimmer effect */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
  