<template>
  <section
    class="w-full mt-28"
    ref="githubSection"
    id="github-section"
  >
    <div
      :class="[
        'flex flex-col gap-y-4 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300',
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
      ]"
    >
      <div
        class="relative flex items-center text-black dark:text-slate-300"
        :class="[
          visible
            ? 'translate-y-0 opacity-1 blur-0'
            : 'translate-y-4 opacity-0 blur-sm',
          'transition-all motion-reduce:transition-none duration-500',
        ]"
      >
        <h1 class="text-2xl lg:text-3xl font-bold pr-5">
          <a :href="content.profileLink" target="_blank">Github</a>
        </h1>
        <div
          class="flex-grow border-t border-black dark:border-white border-1"
        ></div>
      </div>
    </div>
    <div
      class="relative items-center flex ml-6 mt-4 mb-3"
      :class="[
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
        'transition-all motion-reduce:transition-none duration-500',
      ]"
    >
      <h2 class="pr-4 font-bold">
        <a :href="content.reposLink" target="_blank">Repositories</a>
      </h2>
      <div
        class="flex-grow border-t border-black/20 dark:border-white/50 border-1"
      ></div>
    </div>
    <div
      v-if="data"
      class="pl-5 flex flex-col flex-wrap justify-center gap-6"
      :class="[
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
        'transition-all motion-reduce:transition-none duration-500',
      ]"
    >
      <div
        v-for="repo in data.viewer.pinnedItems.nodes"
        :key="repo.id"
        class="h-44 p-4 sm:p-8 rounded-xl dark:border-white/10 border border-button-color/50 shadow-sm shadow-button-color/10"
        :class="[
          visible
            ? 'translate-y-0 opacity-1 blur-0'
            : 'translate-y-4 opacity-0 blur-sm',
          'transition-all motion-reduce:transition-none duration-500',
        ]"
      >
        <a
          :href="repo.url"
          target="_blank"
          class="underline pr-5 text-slate-1000 dark:text-slate-300"
          :class="[
            visible
              ? 'translate-y-0 opacity-1 blur-0'
              : 'translate-y-4 opacity-0 blur-sm',
            'transition-all motion-reduce:transition-none duration-500',
          ]"
        >
          {{ repo.name }}
        </a>
        <font-awesome-icon
          icon="fa-regular fa-star"
          class="text-lg pr-1 text-slate-500 dark:text-slate-300"
        ></font-awesome-icon>
        <span
          class="text-slate-500 dark:text-slate-300"
          :class="[
            visible
              ? 'translate-y-0 opacity-1 blur-0'
              : 'translate-y-4 opacity-0 blur-sm',
            'transition-all motion-reduce:transition-none duration-500',
          ]"
        >
          {{ repo.stargazerCount }}
        </span>
        <p
          class="sm:text-base text-[14px] !text-wrap pt-3 text-slate-500 dark:text-slate-300"
          :class="[
            visible
              ? 'translate-y-0 opacity-1 blur-0 text-balance'
              : 'translate-y-4 opacity-0 blur-sm',
            'transition-all motion-reduce:transition-none duration-500',
          ]"
        >
          {{ repo.description }}
        </p>
      </div>
    </div>
    <div v-if="error">Error in loading data: {{ error.message }}</div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import { githubInfo } from '../queries/github';
  import { useQuery } from '@vue/apollo-composable';
  import { onIntersect } from '../composables/onIntersect';

  const { result, error } = useQuery(githubInfo, null, {
    clientId: 'github',
  });
  const data = result;
  const props = defineProps({
    content: Object,
    transitions: Object,
  });

  const githubSection = ref({});
  const visible =
    props.transitions.active &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      ? onIntersect(githubSection, !!props.transitions.showOnce, {
          threshold: props.transitions.thresholdOption,
        })
      : true;
</script>
