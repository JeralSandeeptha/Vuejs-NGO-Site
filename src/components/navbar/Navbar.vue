<script setup lang="ts">
import Container from "../container/Container.vue";
import InnerContainer from "../inner-container/InnerContainer.vue";
import logo from "../../assets/logos/Logo.png";
import Button from "../button/Button.vue";
import { ref } from "vue";

const isNavOpen = ref(false);

const handleToggle = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNav = () => {
  isNavOpen.value = false;
}
</script>

<template>
  <Container>
    <InnerContainer>
      <div class="py-[20px] w-full flex items-center justify-between">
        <div>
          <router-link to="/">
            <img :src="logo" alt="company-logo" class="w-[100px] md:w-full"/>
          </router-link>
        </div>
        <div class="hidden lg:block flex lg:gap-5 text-[gray] lg:flex">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/what-we-do">What We Do</router-link>
          <router-link to="/media">Media</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="hidden lg:block">
          <router-link to="/donate">
            <Button text="Donate" bgColor="#1D2130" textColor="white" />
          </router-link>
        </div>
        <svg
          @click="handleToggle()"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-align-justify-icon lucide-align-justify cursor-pointer block lg:hidden"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </div>

      <div v-if="isNavOpen" class="top-0 left-0 w-full h-[100vh] absolute block lg:hidden flex flex-col items-center justify-center bg-yellow md:w-[50%]">
        <div class="px-[20px] w-full flex flex-col gap-5">
          <div class="flex gap-5 text-[gray] flex-col">
            <router-link @click="closeNav()" class="text-black" to="/">Home</router-link>
            <router-link @click="closeNav()" class="text-black" to="/about">About Us</router-link>
            <router-link @click="closeNav()" class="text-black" to="/what-we-do">What We Do</router-link>
            <router-link @click="closeNav()" class="text-black" to="/media">Media</router-link>
            <router-link @click="closeNav()" class="text-black" to="/contact">Contact</router-link>
          </div>
          <div class="w-full">
            <router-link to="/donate" class="w-full">
              <Button c class="w-full max-w-[500px] w-[500px]" text="Donate" bgColor="#1D2130" textColor="white" />
            </router-link>
          </div>
        </div>
        <svg
          @click="handleToggle()"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="absolute top-[25px] right-[37px] lucide lucide-x-icon lucide-x cursor-pointer"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>

    </InnerContainer>
  </Container>
</template>

<style scoped></style>
