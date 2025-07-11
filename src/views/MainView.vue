<template>
  <SplashView v-if="showingSplash" />

  <div
    v-show="!showingSplash"
    class="min-h-screen overscroll-contain bg-white dark:bg-zinc-950 dark:text-slate-300 text-base md:text-xl"
  >
    <Navbar
      :show-transition="showLanding"
      :dark-mode-active="darkModeActive"
      @toggle-dark="toggleDark"
    />

    <div class="min-h-full mx-10">
      <div class="flex flex-col md:grid md:grid-cols-6 min-h-full">
        <div
          class="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none"
        >
          <ul
            class="md:fixed md:bottom-0 mb-7 flex items-center space-x-8 md:flex-col md:space-y-4 md:space-x-0"
          >
            <li
              v-show="githubLink"
              :class="[
                'transition-all motion-reduce:transition-none duration-500',
                showLanding
                  ? 'translate-y-0 opacity-1'
                  : '-translate-y-4 opacity-0',
              ]"
            >
              <a :href="githubLink" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-github"
                  class="h-8 w-8 md:h-10 md:w-10 text-slate-600 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"
                ></font-awesome-icon>
              </a>
            </li>
            <li
              v-show="instagramLink"
              :class="[
                'transition-all motion-reduce:transition-none duration-500 delay-[200ms]',
                showLanding
                  ? 'translate-y-0 opacity-1'
                  : '-translate-y-4 opacity-0',
              ]"
            >
              <a :href="instagramLink" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                  class="h-8 w-8 md:h-10 md:w-10 text-slate-600 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"
                ></font-awesome-icon>
              </a>
            </li>
            <li
              v-show="linkedinLink"
              :class="[
                'transition-all motion-reduce:transition-none duration-500 delay-[100ms]',
                showLanding
                  ? 'translate-y-0 opacity-1'
                  : '-translate-y-4 opacity-0',
              ]"
            >
              <a :href="linkedinLink">
                <font-awesome-icon
                  icon="fa-brands fa-linkedin"
                  class="h-8 w-8 md:h-10 md:w-10 text-slate-600 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"
                ></font-awesome-icon>
              </a>
            </li>
            <li
              v-show="xTwitterLink"
              :class="[
                'transition-all motion-reduce:transition-none duration-500 delay-[200ms]',
                showLanding
                  ? 'translate-y-0 opacity-1'
                  : '-translate-y-4 opacity-0',
              ]"
            >
              <a :href="xTwitterLink" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-x-twitter"
                  class="h-8 w-8 md:h-10 md:w-10 text-slate-600 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"
                ></font-awesome-icon>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-4 flex-1 flex-col order-1 md:order-none">
          <div class="container mx-auto max-w-full 2xl:max-w-6xl">
            <LandingView
              :content="personal.greeting"
              :show-transition="showLanding"
            />

            <AboutView
              :content="personal.about"
              :transitions="personal.transitions"
            />

            <EducationView
              :content="personal.education"
              :transitions="personal.transitions"
            />

            <AlgoraView 
              :content="personal.OSS"
              :transitions="personal.transitions"
            />

            <GithubView
              :content="personal.github"
              :transitions="personal.transitions"
            />

            <LeetCodeView
              :content="personal.leetcode"
              :dark-mode-active="darkModeActive"
              :transitions="personal.transitions"
            />

            <ContactView
              :content="personal.contact"
              :transitions="personal.transitions"
            />

            <footer class="hidden text-center flex mb-5 justify-center">
              <div class="pt-4 flex flex-wrap text-center mt-auto text-slate-500 dark:text-slate-300 text-base lg:text-base italic dark:not-italic">
                <p v-for="tech in personal.about.techStack" class="pr-4 last:pr-0">#{{ tech }}</p>
              </div>
              <p class="hidden">
                designed & created by
                <a href="#" class="hover:text-link-color">
                  tribhuwan
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div
          class="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none"
        >
          <p
            :class="[
              'fixed bottom-2 right-10 origin-top-right rotate-90 transition-all motion-reduce:transition-none duration-500',
              showLanding
                ? 'translate-y-0 opacity-1'
                : '-translate-y-4 opacity-0',
            ]"
          >
            based in {{ personal.greeting.basedLocation }}
          </p>
        </div>
        <footer class="text-center md:hidden order-last mb-8 flex justify-center">
          <p class="hidden">
            designed & Created by
            <a href="" class="hover:text-link-color">
              Tribhuwan
            </a>
          </p>
          <div class="pt-8 xl:pt-4 justify-center flex flex-wrap text-center mt-auto text-slate-500 dark:text-slate-300 text-base lg:text-base italic dark:not-italic">
            <p v-for="tech in personal.about.techStack" class="pr-4 last:pr-0">#{{ tech }}</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import Navbar from '../components/Navbar.vue';
  import LandingView from './LandingView.vue';
  import AboutView from './AboutView.vue';
  import EducationView from './EducationView.vue';
  import GithubView from './GithubView.vue';
  import LeetCodeView from './LeetCodeView.vue';
  import ContactView from './ContactView.vue';
  import SplashView from './SplashView.vue';
  import AlgoraView from './AlgoraView.vue';
  import personal from '../personal';

  const router = useRouter();
  const showingSplash = ref(personal.splashScreen);
  const showLanding = ref(
    !(personal.transitions.active || personal.transitions.onlyLanding)
  );
  const darkModeActive = ref(false);

  onMounted(() => {
    splashScreen();
    landingTransition();
    useDark();
  });

  const githubLink = personal.socialMediaLinks.github;
  const instagramLink = personal.socialMediaLinks.instagram;
  const linkedinLink = personal.socialMediaLinks.linkedin;
  const xTwitterLink = personal.socialMediaLinks.xtwitter;
  const tech = personal.about.techStack;

  const splashScreen = () => {
    if (personal.splashScreen) {
      setTimeout(() => {
        showingSplash.value = false;
        router.push(window.location.hash);
      }, 2000);
    }
  };

  const landingTransition = () => {
    if (!showLanding.value && personal.splashScreen) {
      setTimeout(() => {
        showLanding.value = true;
      }, 2100);
    } else if (!showLanding.value) {
      setTimeout(() => {
        showLanding.value = true;
      }, 500);
    }
  };

  const useDark = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('bg-white');
      document.documentElement.classList.add('dark', 'bg-zinc-950');
      darkModeActive.value = true;
    } else {
      document.documentElement.classList.remove('dark', 'bg-zinc-950');
      document.documentElement.classList.add('bg-white');
      darkModeActive.value = false;
    }
  };

  const toggleDark = () => {
    if (darkModeActive.value) {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
    useDark();
  };
</script>
