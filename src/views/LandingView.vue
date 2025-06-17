<template>
  <section
    class="min-h-[calc(100vh*0.70)] w-full flex justify-center mb-12"
    id="landing-page"
  >
    <div
      v-if="data"
      class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-10 flex-col md:flex-row m-auto mt-16"
    >
      <img
        :class="[
          'w-52 h-52 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms]',
          showTransition
            ? 'translate-y-0 opacity-1'
            : '-translate-y-4 opacity-0',
        ]"
        :src="data.viewer.avatarUrl"
      />
      <div class="flex flex-col space-y-2">
        <p
          :class="[
            'hidden text-lg lg:text-2xl transition-all motion-reduce:transition-none duration-500 delay-[500ms]',
            showTransition
              ? 'translate-y-0 opacity-1'
              : '-translate-y-4 opacity-0',
          ]"
        >
          {{ content.intro }}
        </p>
        <h1
          :class="[
            'text-4xl lg:text-6xl font-bold antialiased transition-all motion-reduce:transition-none duration-500 delay-[550ms]',
            showTransition
              ? 'translate-y-0 opacity-1'
              : '-translate-y-4 opacity-0',
          ]"
        >
          {{ content.name }}
        </h1>
        <p
          :class="[
            'text-lg lg:text-xl text-right text-slate-500 antialiased dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms]',
            showTransition
              ? 'translate-y-0 opacity-1'
              : '-translate-y-4 opacity-0',
          ]"
        >
          {{ content.message }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, watchEffect, watch } from 'vue';
  import { githubInfo } from '../queries/github';
  import { useQuery } from '@vue/apollo-composable';

  const { result } = useQuery(githubInfo, null, { clientId: 'github' });
  const data = result;

  const props = defineProps({ content: Object, showTransition: Boolean });
  const showIntro = ref(false);

  const setFavicon = (url) => {
    const favicon = document.getElementById('dyn-favicon');
    if (favicon && url) {
      favicon.href = url;
    }
  }

  watch(result, (newResult) => {
    if (newResult && newResult.viewer && newResult.viewer.avatarUrl) {
      setFavicon(newResult.viewer.avatarUrl);
    }
  });

</script>
