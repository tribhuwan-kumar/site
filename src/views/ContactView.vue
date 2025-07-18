<template>
  <section
    class="w-full flex flex-col mt-28 mb-40"
    ref="contactSection"
    id="contact-section"
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
      <div
        class="flex-grow border-t border-black dark:border-white border-1"
      ></div>
      <h1 class="text-2xl lg:text-3xl font-bold px-5">Contact</h1>
      <div
        class="flex-grow border-t border-black dark:border-white border-1"
      ></div>
    </div>
    <div
      :class="[
        'flex flex-col mt-10 transition-all motion-reduce:transition-none duration-500 delay-300',
        visible
          ? 'translate-y-0 opacity-1 blur-0'
          : 'translate-y-4 opacity-0 blur-sm',
      ]"
    >
      <div v-if="content.formEmbedLink">
        <iframe
          :src="content.formEmbedLink"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="mb-10 min-h-screen w-full"
        >
          Loading...
        </iframe>
      </div>
      <div v-else class="space-y-8 mx-auto mt-12 lg:mt-15">
        <h1 class="text-2xl lg:text-3xl font-extrabold text-center hidden">
          Get in Touch
        </h1>
        <p
          v-for="msg in content.externalLink.note"
          class="text-slate-500 hidden dark:text-slate-300"
        >
          {{ msg }}
          <br />
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-x-5"
        >
          <template v-if="content.externalLink.link.email">
            <a :href="'mailto:' + content.externalLink.link.email">
              <button
                class="py-2 px-6 bg-transparent border-button-color/50 rounded-md shadow-sm shadow-button-color/20 hover:text-link-color active:text-white"
              >
                Send me an Email
              </button>
            </a>
          </template>
          <template v-else>
            <a :href="content.externalLink.link.other" target="_blank">
              <button
                class="py-2 px-6 bg-transparent border border-button-color/50 rounded-md shadow-sm shadow-button-color/20 hover:text-link-color active:text-white duration-300"
              >
                Reach Out
              </button>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import { onIntersect } from '../composables/onIntersect';

  const props = defineProps({
    content: Object,
    transitions: Object,
  });

  const contactSection = ref({});
  const visible =
    props.transitions.active &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      ? onIntersect(contactSection, !!props.transitions.showOnce, {
          threshold: props.transitions.thresholdOption,
        })
      : true;
</script>
