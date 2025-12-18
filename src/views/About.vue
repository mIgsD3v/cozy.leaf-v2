<script setup></script>
<template>
  <div>
    <section
      class="z-0 relative w-full min-h-[650px] lg:min-h-[650px] xl:min-h-[500px] flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover bg-[#faf5ef]"
    >
      <!-- Brightness Overlay -->
      <div
        class="absolute inset-0 bg-[#faf5ef] opacity-80 z-10"
        style="backdrop-filter: brightness(0.8)"
      ></div>

      <!-- Content Section -->
      <div
        class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-20 px-4 sm:px-6 lg:px-8 py-10 lg:py-16"
      >
        <!-- Image First on Mobile, Left on Desktop -->
        <div
          class="w-full lg:w-6/12 mt-20"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img
            src="/CozyLeaf/about-story.png"
            alt="Indian family eating home-cooked meal"
            class="rounded-xl shadow-md w-full h-auto object-cover max-h-[400px] mx-auto"
          />
        </div>

        <!-- Text Content -->
        <div
          class="w-full lg:w-6/12 text-gray-800 text-base leading-relaxed lg:mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2
            class="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#800000] leading-tight mb-4"
          >
            Our Story
          </h2>
          <p
            class="font-body text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 max-w-xl mb-4"
          >
            At Negi's Hearth, we serve more than just meals — we serve memories.
            Inspired by the warmth of Indian kitchens and the comfort of
            home-cooked food, our cloud kitchen brings delicious home style
            food straight to your doorstep. Whether you’re away from home or
            just craving something truly comforting, our dishes are made to
            remind you of your favorite family recipes — fresh, flavorful, and
            filled with love.
          </p>
        </div>
      </div>
    </section>

    <section
      class="z-0 relative w-full min-h-[30px] flex flex-col items-center justify-center overflow-hidden mx-auto px-6 py-12 sm:px-6 lg:px-10 sm:py-16"
      style="background-color: #faf5ef"
    >
      <!-- Auto-Scrolling Image Strip -->
      <!-- Auto-Scrolling Image Strip -->
      <div
        class="w-full overflow-hidden relative h-[160px]"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div
          ref="slider"
          class="flex whitespace-nowrap will-change-transform gap-x-6"
          :style="{
            transform: `translateX(${position}px)`,
            width: 'max-content', // 👈 THIS MAKES THE SLIDER STRETCH BEYOND CONTAINER
          }"
        >
          <template v-for="repeat in 3" :key="'group-' + repeat">
            <div
              v-for="(image, index) in images"
              :key="`img-${repeat}-${index}`"
              class="flex-shrink-0 w-[150px] h-[150px] rounded-xl overflow-hidden"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover"
              />
            </div>
          </template>
        </div>
      </div>
    </section>

    <section
      class="z-0 relative w-full min-h-[100px] flex flex-col items-center justify-center overflow-hidden mx-auto px-6 py-12 sm:px-6 lg:px-10 sm:py-16"
      style="background-color: #800000"
    >
      <div
        class="max-w-7xl w-full text-center mt-10"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2
          class="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-5xl text-[#D4AF37] leading-tight mb-4"
        >
          Our Values
        </h2>

        <!-- Values Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 mt-10 px-2"
        >
          <!-- Value 1 -->
          <div class="text-center px-4">
            <h3
              class="text-lg sm:text-xl lg:text-1xl font-semibold text-[#D4AF37] mb-2"
            >
              Authenticity
            </h3>
            <p
              class="text-sm sm:text-base lg:text-1xl text-[#FAF5EF] max-w-xs mx-auto"
            >
              Traditional recipes and regional flavors — true to India’s roots.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="text-center px-4">
            <h3
              class="text-lg sm:text-xl lg:text-1xl font-semibold text-[#D4AF37] mb-2"
            >
              Homestyle Cooking
            </h3>
            <p
              class="text-sm sm:text-base lg:text-1xl text-[#FAF5EF] max-w-xs mx-auto"
            >
              Food that feels like it came straight from nani’s kitchen — warm
              and comforting.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="text-center px-4">
            <h3
              class="text-lg sm:text-xl lg:text-1xl font-semibold text-[#D4AF37] mb-2"
            >
              Hygiene & Freshness
            </h3>
            <p
              class="text-sm sm:text-base lg:text-1xl text-[#FAF5EF] max-w-xs mx-auto"
            >
              Clean kitchens, daily-prepped ingredients — no compromises.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="text-center px-4">
            <h3
              class="text-lg sm:text-xl lg:text-1xl font-semibold text-[#D4AF37] mb-2"
            >
              Customer First
            </h3>
            <p
              class="text-sm sm:text-base lg:text-1xl text-[#FAF5EF] max-w-xs mx-auto"
            >
              Your satisfaction is our spice of life — we cook with you in mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="z-0 relative w-full min-h-[100px] flex flex-col items-center justify-center overflow-hidden mx-auto px-6 py-12 sm:px-6 lg:px-10 sm:py-16"
      style="background-color: #faf5ef"
    >
      <div
        class="max-w-7xl w-full text-center mt-10"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <!-- CTA Section -->
        <div class="text-center mt-2 mb-10">
          <h4
            class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#800000] mb-4"
          >
            Hungry Already?
          </h4>
          <span> Let’s Serve You Something Special!</span>
        </div>
        <RouterLink
          to="/menu"
          class="inline-block px-6 py-3 bg-[#800000] rounded-lg text-[#FAF3E0] text-sm sm:text-base lg:text-lg hover:bg-[#D4AF37] hover:text-[#800000] transition duration-300"
        >
          Order Now
        </RouterLink>
      </div>
    </section>
    <!-- About Section -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const position = ref(0);
const scrollSpeed = 1.5;
const isPaused = ref(false);
const slider = ref(null);

const images = [
  { src: "/CozyLeaf/biryani.png", alt: "Biryani" },
  { src: "/CozyLeaf/masala.png", alt: "Masala" },
  { src: "/CozyLeaf/rogan.png", alt: "Rogan" },
  { src: "/CozyLeaf/gulab.png", alt: "Gulab" },
  { src: "/CozyLeaf/chole.png", alt: "Chole" },
  { src: "/CozyLeaf/shahi.png", alt: "Shahi" },
  { src: "/CozyLeaf/biryani.png", alt: "Biryani 2" },
  { src: "/CozyLeaf/biryani.png", alt: "Biryani 3" },
];

onMounted(() => {
  const animate = () => {
    if (slider.value && !isPaused.value) {
      position.value -= scrollSpeed;

      const totalWidth = slider.value.scrollWidth / 3;
      if (Math.abs(position.value) >= totalWidth) {
        position.value = 0;
      }
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
</script>

<style scoped>
/* Optional: Customize fonts or add responsive tweaks */
</style>
