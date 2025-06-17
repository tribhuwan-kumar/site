<template>
  <div
    class="flex flex-row items-center justify-around space-x-2 xl:justify-center max-w-full w-full h-36 xl:w-[600px] xl:min-h-36 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-zinc-950 border border-black/10 rounded-xl dark:border-white/10 transition-all duration-300"
  >
    <span class="border rounded-full border-slate-500/30 w-12 h-12 xl:w-16 xl:h-16 items-center flex justify-center">
      <font-awesome-icon
        icon="fas fa-graduation-cap"
        class="h-8 w-8 md:h-10 md:w-10 text-slate-500 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"
      ></font-awesome-icon>
    </span>
    <span>
      <p class="text-lg lg:text-xl font-medium text-wrap">{{ education.degree }}</p>
      <span class="text-lg text-slate-500 dark:text-slate-300">{{ education.duration }}</span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  education: Object,
});
</script>

