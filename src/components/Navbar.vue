<template>
  <header
    :class="[
      'main-header fixed left-0 top-0 z-[999] w-full transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white py-2 shadow-md' : 'bg-transparent py-4',
    ]"
  >
    <div class="mx-auto flex max-w-screen-xl items-center justify-between px-6">
      <!-- Logo -->
      <RouterLink to="" class="flex items-center">
        <img
          src="/CozyLeaf/cozyLeaf.png"
          alt="TSI Logo"
          class="w-20 md:h-65 md:w-60 h-auto transition-all duration-300 object-contain"
        />
      </RouterLink>

      <!-- Hamburger Icon (Mobile Only) -->

      <!-- Mobile Nav: Bag, Search, Hamburger -->
      <div class="lg:hidden flex items-center gap-3">
        <!-- 🛍️ Shopping Bag Icon -->
        <RouterLink
          to=""
          class="inline-flex items-center justify-center w-10 h-10 text-[#b3996a] transition hover:text-white hover:bg-[#D4AF37] rounded-full"
        >
          <img
            src="/CozyLeaf/icons/shoppingbag.svg"
            alt="Shopping Bag"
            class="w-5 h-5"
          />
        </RouterLink>

        <!-- 🔍 Search Icon -->
        <RouterLink
          to=""
          class="inline-flex items-center justify-center w-10 h-10 text-[#b3996a] transition hover:text-white hover:bg-[#D4AF37] rounded-full"
        >
          <img src="/CozyLeaf/icons/search.svg" alt="Search" class="w-5 h-5" />
        </RouterLink>

        <!-- 🍔 Hamburger Icon Toggle -->
        <button
          class="bg-transparent focus:outline-none transition-colors duration-300"
          @click="toggleMobileMenu"
          aria-label="Toggle Menu"
        >
          <!-- 3x3 maroon dot grid icon (menu closed) -->
          <div v-if="!mobileMenuOpen" class="grid grid-cols-3 gap-0.5 w-6 h-6">
            <span
              v-for="n in 9"
              :key="n"
              class="w-1.5 h-1.5 bg-[#800000] rounded-full"
            ></span>
          </div>

          <!-- Maroon 'X' icon (menu open) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-[#800000]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex flex-1 items-center justify-center">
        <nav>
          <ul class="flex items-center justify-center gap-x-12 px-6">
            <li v-for="(menu, index) in menuItems" :key="index">
              <RouterLink
                :to="menu.link"
                class="block font-medium transition-all duration-300 relative py-2 border-b-4"
                :class="[
                  route?.path === menu.link
                    ? 'text-[#800000] border-[#800000] hover:text-[#800000]' // active state: stays maroon even on hover
                    : 'text-[#2E2E2E] hover:text-[#800000] border-transparent', // inactive
                ]"
                :style="{ fontSize: '18px' }"
              >
                {{ menu.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Desktop Buttons -->
      <div class="hidden lg:flex items-center gap-x-3">
        <RouterLink
          to="/menu"
          class="inline-flex items-center justify-center w-10 h-10 text-[#b3996a] transition hover:text-white hover:bg-[#D4AF37] rounded-full"
        >
          <img
            src="/CozyLeaf/icons/shoppingbag.svg"
            alt="Menu Icon"
            class="w-5 h-5"
          />
        </RouterLink>

        <RouterLink
          to="/menu"
          class="inline-flex items-center justify-center w-10 h-10 text-[#b3996a] transition hover:text-white hover:bg-[#D4AF37] rounded-full"
        >
          <img
            src="/CozyLeaf/icons/search.svg"
            alt="Menu Icon"
            class="w-5 h-5"
          />
        </RouterLink>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-0 left-0 w-1/2 h-screen bg-white shadow-md z-[999]"
      >
        <ul class="flex flex-col items-center py-6 px-6 gap-9 mt-6">
          <li v-for="(menu, index) in menuItems" :key="index">
            <RouterLink
              :to="menu.link"
              :class="[
                'block text-[17px] font-medium',
                route?.path === menu.link
                  ? 'text-[#800000]'
                  : 'text-[#2E2E2E] hover:text-[#800000]',
              ]"
              @click="closeMobileMenu"
            >
              {{ menu.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const currentPath = computed(() => route?.path ?? "");
const isMenuPage = computed(() => currentPath.value === "/menu");

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Catering", link: "/catering" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Mobile menu toggle
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Fade transition for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
