<template>
  <div class="w-[calc(100%-48px)] mx-auto px-4 py-6 border-[0.5px] rounded-lg bg-true-gray-900 shadoww">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shadoww{
    box-shadow: -8px 8px 15px rgba(255, 255, 255, 0.2), 8px 8px 15px rgba(255, 255, 255, 0.2);
}
</style>