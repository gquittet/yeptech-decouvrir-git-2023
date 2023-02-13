<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
});
</script>

<template>
  <div class="slidev-layout default flex gap-8 h-full" :class="props.class">
      <img :src="props.image" class="w-1/2 h-full object-cover rounded shadow dark:(filter brightness-75)" />
      <div class="flex-1">
        <slot />

      </div>
    </div>
</template>
