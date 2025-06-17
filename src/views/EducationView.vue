<template>
  <section
    class="w-full"
    ref="educationSection"
    id="education-section"
  >
    <div
      class="relative flex py-5 items-center"
      :class="[
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
        'transition-all motion-reduce:transition-none duration-500',
      ]"
    >
      <h1 class="text-2xl lg:text-3xl font-bold pr-5">Education</h1>
      <div class="flex-grow border-t border-black dark:border-white border-1" ></div>
    </div>
    <div
      :class="[
        'flex flex-col space-y-4 lg:space-y-0 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300',
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
      ]"
    >
      <EducationCard
        v-for="(education, index) in content"
        :key="index"
        :education="education"
      />
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import EducationCard from '../components/EducationCard.vue';
  import { onIntersect } from '../composables/onIntersect';

  const props = defineProps({
    content: Object,
    transitions: Object,
  });
  const educationSection = ref({});
  const visible =
    props.transitions.active &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      ? onIntersect(educationSection, !!props.transitions.showOnce, {
          threshold: props.transitions.thresholdOption,
        })
      : true;
</script>
