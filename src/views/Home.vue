<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    text1: "Delicious",
    text2: "homestyle food",
    text3:
      "Simple, hearty meals made with care — the kind that never go out of style.",
    image: "/CozyLeaf/icons/heroimage.svg",
  },
  {
    text1: "GATHER",
    text2: "AROUND FOOD",
    text3:
      "Where food brings hearts closer. Share a table, share a story worth savoring.",
    image: "/CozyLeaf/icons/heroimage.svg",
  },
  {
    text1: "COMFORT",
    text2: "ON EVERY PLATE",
    text3:
      "Simple, hearty meals made with care — the kind that never go out of style.",
    image: "/CozyLeaf/icons/heroimage.svg",
  },
];
const testimonials = [
  {
    text: "Absolutely loved the Chicken Biryani! The flavor was authentic and reminded me of home.",
    author: "Priya S.",
  },
  {
    text: "The Shahi Paneer was rich and creamy, just like homemade. Highly recommend!",
    author: "Rahul M.",
  },
];
</script>

<template>
  <div>
    <section class="pt-6 pb-12" style="background-color: #faf5ef">
      <!-- Content Section -->
      <div
        class="relative z-20 w-full text-white flex items-center px-4 md:px-6 lg:px-8 mt-20"
      >
        <Swiper
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
          class="mySwiper w-full"
        >
          <SwiperSlide
            v-for="(slide, index) in slides"
            :key="index"
            class="flex items-center"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto gap-10 md:h-[500px]"
            >
              <!-- LEFT: Text Content -->
              <div
                class="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
              >
                <h1
                  class="font-headline font-bold text-3xl sm:text-4xl md:text-6xl lg:text-6xl text-[#800000] leading-tight"
                  style="font-family: 'Playfair Display', serif"
                >
                  {{ slide.text1 }} <br />
                  <span class="text-[#800000] font-bold">{{
                    slide.text2
                  }}</span>
                </h1>

                <p
                  class="font-body font-semibold text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 max-w-xl"
                  style="font-family: 'Lato'"
                >
                  {{ slide.text3 }}
                </p>

                <!-- Buttons -->
                <div
                  class="flex flex-row flex-wrap justify-center md:justify-start gap-3 pt-2 mb-6"
                >
                  <RouterLink
                    class="bg-[#800000] text-white px-8 py-4 text-lg sm:text-xl rounded-lg transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                    style="font-family: 'DM Serif Text', serif"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>

              <!-- RIGHT: Image -->
              <div
                class="order-1 md:order-2 w-full flex justify-center md:justify-end"
              >
                <img
                  :src="slide.image"
                  alt="Slide Image"
                  :class="[
                    slide.image.includes('hehe')
                      ? 'w-[220px] sm:w-[320px] md:w-[500px] md:h-[420px] lg:w-[550px] lg:h-[460px]'
                      : 'w-[270px] sm:w-[800px] md:w-[7980px] md:h-[480px] lg:w-[820px] lg:h-[620px]',
                  ]"
                  class="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section
      class="z-0 relative w-full min-h-[430px] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 py-10 sm:py-16"
      style="background-color: #faf5ef"
    >
      <!-- Section Header -->
      <div class="relative z-10 text-center w-full max-w-6xl mb-12 mx-auto">
        <h2
          class="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-5xl text-[#800000] leading-tight"
        >
          Our Signature Indian Dishes
        </h2>
        <p
          class="font-body text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mx-auto mt-5"
          style="font-family: 'Lato', sans-serif"
        >
          Timeless flavors from the heart of India — prepared with care and
          delivered with pride
        </p>
      </div>
      <Swiper
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :modules="[Pagination]"
        class="mySwiper w-full"
      >
        <!-- Slide 1 -->
        <SwiperSlide>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto px-4"
          >
            <!-- Card 1 -->
            <!-- Dish Card -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Chicken Biryani"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Fragrant basmati rice layered with tender chicken and
                  traditional spices.
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/shahi.png"
                alt="Shahi  Paneer"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Shahi Paneer
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Rich, creamy Mughlai curry with soft paneer cubes and aromatic
                  spices.
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/gulab.png"
                alt="Gualab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Gualab Jamun
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹120
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Deep-fried milk dumplings soaked in rose-flavored sugar syrup
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 2 -->
        <SwiperSlide>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4"
          >
            <!-- Card 4 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Chicken Biryani"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Fragrant basmati rice layered with tender chicken and
                  traditional spices.
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>

            <!-- Card 5 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/shahi.png"
                alt="Shahi  Paneer"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Shahi Paneer
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Rich, creamy Mughlai curry with soft paneer cubes and aromatic
                  spices.
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>

            <!-- Card 6 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full sm:max-w-[320px] mx-auto"
            >
              <img
                src="/CozyLeaf/gulab.png"
                alt="Gualab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />
              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3
                    class="font-headline text-base sm:text-xl text-[#800000] font-bold"
                  >
                    Gualab Jamun
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹120
                  </span>
                </div>
                <p
                  class="font-body text-xs sm:text-sm text-gray-700 mb-4 text-justify"
                  style="font-family: 'Lato', sans-serif"
                >
                  Deep-fried milk dumplings soaked in rose-flavored sugar syrup
                </p>
                <div class="flex justify-end w-full">
                  <RouterLink
                    class="inline-block bg-[#800000] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#D4AF37] hover:text-[#800000]"
                  >
                    Order Now
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="w-full flex flex-col md:flex-row">
      <!-- Left Side: Image -->
      <div class="w-full md:w-1/2">
        <img
          src="/CozyLeaf/about-story.png"
          alt="Delicious Food"
          class="w-full h-[600px] object-cover"
        />
      </div>

      <!-- Right Side: Text with BG Color -->
      <div
        class="w-full md:w-3/4 bg-[#800000] text-white flex flex-col justify-center p-6 sm:p-8 md:p-16"
      >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] font-bold mb-4"
        >
          Why Choose Us?
        </h2>
        <p class="text-base sm:text-lg mb-10">
          Our dishes are inspired by traditional Indian recipes and prepared
          with the highest quality ingredients. Delivered fresh, with a taste of
          home in every bite.
        </p>

        <!-- Icons Grid -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-10"
        >
          <!-- Icon 1 -->
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/authentic.png"
              alt="Authentic Taste"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <p class="text-sm sm:text-base">Authentic Indian Recipe</p>
          </div>
          <!-- Icon 2 -->
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/fresh.png"
              alt="Fresh Ingredients"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <p class="text-sm sm:text-base">Fresh & Natural Ingredients</p>
          </div>
          <!-- Icon 3 -->
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/hygiene.png"
              alt="Hygiene You Can Trust"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <p class="text-sm sm:text-base">Hygiene You Can Trust</p>
          </div>
          <!-- Icon 4 -->
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/expert.png"
              alt="Expert"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <p class="text-sm sm:text-base">Expert Culinary Team</p>
          </div>
          <!-- Icon 5 -->
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/love.png"
              alt="Made With Love"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <p class="text-sm sm:text-base">Made With Love</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="flex justify-center sm:justify-start">
          <button
            class="inline-block bg-[#D4AF37] text-[#800000] font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#D4AF37] hover:text-[#800000] transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
    <section
      class="z-0 relative w-full min-h-[430px] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 py-10 sm:py-16"
      style="background-color: #faf5ef"
    >
      <!-- Auto-Scrolling Image Strip -->
      <!-- Auto-Scrolling Image Strip -->

      <div
        class="max-w-7xl w-full text-center mt-10"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <!-- CTA Section -->
        <div class="text-center mt-6 mb-10">
          <h4
            class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#800000] mb-4"
          >
            Why our customers love us?
          </h4>
          <div class="flex flex-col items-center text-center">
            <img
              src="/CozyLeaf/icons/quote.svg"
              alt="Made With Love"
              class="w-14 h-14 sm:w-16 sm:h-16 mb-3"
            />
            <Swiper
              :slides-per-view="1"
              :pagination="{ clickable: true }"
              :modules="[Pagination]"
              class="max-w-full sm:max-w-xl mx-auto px-4"
            >
              <SwiperSlide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="px-2"
              >
                <div class="relative z-10 text-center">
                  <p class="text-base sm:text-lg text-gray-800">
                    {{ testimonial.text }}
                  </p>
                  <p class="text-black font-semibold mt-2">
                    {{ testimonial.author }}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
:deep(.swiper-pagination) {
  margin-top: 1.5rem;
  position: static;
  text-align: center;
}

:deep(.swiper-pagination-bullet) {
  background-color: #800000;
  opacity: 0.5;
  width: 9px; /* even bigger active bullet */
  height: 9px;
  margin: 0 8px; /* more space between bullets */
  border-radius: 50%;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #800000;
  opacity: 1;
  width: 9px; /* even bigger active bullet */
  height: 9px;
}
</style>
