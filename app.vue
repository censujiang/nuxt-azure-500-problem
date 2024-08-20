<script setup lang="ts">
if (import.meta.env.SSR) {

} else {
  $fetch('/api/test')
}
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
