<template>
  <nav class="block w-full sticky top-0 z-10 transition-all duration-300" :class="{ '-translate-y-full absolute': !showNavbar }" id="navbar">
    <div class="flex flex-wrap items-center justify-between px-9 md:py-4 bg-white/[.9] dark:bg-zinc-950 backdrop-blur-sm transition-shadow duration-300" :class="{ 'shadow-lg dark:bg-slate-900/[.8]': !hideNavShadow }">
      <router-link to="/#landing-page">
        <div :class="['transition-all motion-reduce:transition-none duration-500', showTransition ? 'opacity-1 blur-0' : 'opacity-0 blur-sm']">
          <div v-if="darkModeActive">
            <div 
              id="custom-logo"
              class="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#e6e8fc] to-[#919196] bg-clip-text text-transparent"
              :class="['transition-all motion-reduce:transition-none duration-500 delay-[50ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']"
            >
              <p class="text-3xl md:text-4xl">&lt;</p>
              <p class="text-6xl md:text-7xl">Tri</p>
              <p class="text-3xl md:text-4xl">/></p>
            </div>
          </div>
          <div v-else>
            <div 
              id="custom-logo"
              class="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#090909] to-[#464748] bg-clip-text text-transparent"
              :class="['transition-all motion-reduce:transition-none duration-500 delay-[50ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']"
            >
              <p class="text-3xl md:text-4xl">&lt;</p>
              <p class="text-6xl md:text-7xl">Tri</p>
              <p class="text-3xl md:text-4xl">/></p>
            </div>
          </div>
        </div>
      </router-link>

      <button @click="dropDownActive = !dropDownActive" :class="['inline-flex items-center p-2 ml-3 text-sm text-gray-500 xl:hidden transition-all motion-reduce:transition-none duration-500', showTransition ? 'opacity-1 blur-0' : 'opacity-0 blur-sm']">
        <div v-if="!dropDownActive">
          <Bars2Icon class="h-10 w-10 dark:fill-slate-300"/>
        </div>
        <div v-else>
          <XMarkIcon class="h-10 w-10 dark:fill-slate-300"/>
        </div>
      </button>

      <div class="hidden w-full xl:block xl:w-auto items-center" id="navbar-default">
        <ul class="font-medium text-xl flex flex-col p-4 xl:p-0 mt-4 xl:flex-row xl:space-x-8 xl:mt-0">
          <li :class="['transition-all motion-reduce:transition-none duration-500 delay-[50ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#about-section">About</router-link>
          </li>
          <li :class="['transition-all motion-reduce:transition-none duration-500 delay-[100ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#education-section">Education</router-link>
          </li>
          <li :class="['transition-all motion-reduce:transition-none duration-500 delay-[150ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#github-section">Projects</router-link>
          </li>
          <li :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#contact-section">Contact</router-link>
          </li>
          <li :class="['hidden transition-all motion-reduce:transition-none duration-500 delay-[250ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <a :href="personal.greeting.resumeLink" target="_blank">
              <button class="block py-2 px-6 bg-transparent border border-button-color/50 rounded-md shadow-sm shadow-button-color/20 hover:text-link-color">Resume</button>
            </a>
          </li>
          <li :class="['transition-all motion-reduce:transition-none duration-500 delay-[250ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
            <button v-if="darkModeActive" class="block py-2" @click="$emit('toggle-dark')">
              <MoonIcon class="h-7 w-7 text-slate-300 hover:text-button-color"/>
            </button>
            <button v-else @click="$emit('toggle-dark')" class="block py-2">
              <SunIcon class="h-7 w-7 text-slate-600 hover:text-link-color"/>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <NavTransition>
      <div v-show="dropDownActive" class="block text-xl w-full absolute xl:hidden px-9 pb-4 bg-white/[.9] dark:bg-zinc-950/[.8] backdrop-blur-sm">
        <ul>
          <li>
            <router-link class="block py-5 hover:text-link-color" to="/#about-section">About</router-link>
          </li>
          <li>
            <router-link class="block py-5 hover:text-link-color" to="/#education-section">Education</router-link>
          </li>
          <li>
            <router-link class="block py-5 hover:text-link-color" to="/#github-section">Work</router-link>
          </li>
          <li>
            <router-link class="block py-5 hover:text-link-color" to="/#contact-section">Contact</router-link>
          </li>
          <li class="hidden">
            <a :href="personal.greeting.resumeLink" target="_blank">
              <button class="block w-full text-center py-2 px-6 mt-5 shadow-sm shadow-button-color/50 border rounded-md border-button-color/50 ">Resume</button>
            </a>
          </li>
          <li>
            <div class="block w-full text-center py-2 mt-5">
              <button v-if="darkModeActive" class="block py-2" @click="$emit('toggle-dark')">
                <MoonIcon class="h-7 w-7 text-slate-300 hover:text-button-color"/>
              </button>
              <button v-else @click="$emit('toggle-dark')" class="block py-2">
                <SunIcon class="h-7 w-7 text-slate-400 hover:text-button-color"/>
              </button> </div>
          </li>
        </ul>
      </div>
    </NavTransition>
  </nav>
</template>

<script setup>
import { Bars2Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavTransition from './transitions/NavTransition.vue';
import personal from '../personal'

const dropDownActive = ref(false)
const showNavbar = ref(true)
const prevScrollPosition = ref(0)

const hideNavShadow = ref(true)

const props = defineProps({
  showTransition: Boolean,
  darkModeActive: Boolean
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

let onScroll = () => {
  const currScrollPosition = window.scrollY

  if (currScrollPosition <= 60) {
    hideNavShadow.value = true
  } else {
    hideNavShadow.value = false
  }

  if (currScrollPosition < 0 || Math.abs(currScrollPosition - prevScrollPosition.value) < 60) {
    return
  }
  showNavbar.value = currScrollPosition < prevScrollPosition.value
  prevScrollPosition.value = currScrollPosition
  dropDownActive.value = false
}
</script>
