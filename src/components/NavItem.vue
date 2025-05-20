<template>
  <router-link
    :to="to"
    class="px-4 py-2 font-medium text-white hover:text-amber-200 transition-all"
  >
    {{ name }}
  </router-link>
</template>

<script setup lang="ts">
    defineProps<{ to: string; name: string }>();
</script>
