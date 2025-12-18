<script setup></script>

<template>
  <section class="bg-[#faf5ef] py-12">
    <div
      class="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1440px] mt-20"
    >
      <!-- Centered Heading (desktop + mobile) -->
      <div class="text-center mb-10 px-4">
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#800000]"
        >
          Our Signature Indian Dishes
        </h1>
        <p class="mt-2 text-[#00000099] max-w-2xl mx-auto text-sm sm:text-base">
          Timeless flavors from the heart of India — prepared with care and
          delivered with pride
        </p>
      </div>
      <!-- Mobile-only Category Select -->
      <div class="block lg:hidden px-4 mb-6">
        <select
          class="w-full p-3 border border-[#00000099] bg-[#faf5ef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
        >
          <option value="all">All Categories</option>
          <option value="starters">Starters</option>
          <option value="main-dish">Main Dish</option>
          <option value="desserts">Desserts</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="best">Best Dishes</option>
        </select>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Sidebar: Categories (desktop only) -->
        <aside
          class="hidden lg:flex lg:col-span-3 p-4 sm:p-6 bg-[#faf5ef] mt-8 lg:mt-0 rounded-lg flex-col"
        >
          <div class="relative flex flex-col justify-end">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="w-full p-2 pl-3 pr-10 border border-[#00000099] bg-[#faf5ef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00000099] h-10"
            />

            <!-- Magnifying glass icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#800000]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>

          <h3
            class="text-md font-bold mb-3 cursor-pointer transition-colors focus:outline-none mt-5"
          >
            All
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Starters
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Main Dish
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Desserts
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Vegetarian
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Non-Vegetarian
          </h3>

          <h3
            class="text-md font-semibold mb-3 cursor-pointer transition-colors focus:outline-none mt-2"
          >
            Best Dishes
          </h3>
          <div class="grid grid-cols-1 gap-2">
            <button
              class="text-left text-sm px-2 py-1 rounded transition-colors hover:text-[#73e627] focus:outline-none focus:ring-0 bg-[#faf5ef]"
            ></button>
          </div>
        </aside>

        <!-- Partners Grid -->
        <div class="lg:col-span-9 sm:mt-8">
          <!-- Responsive 4-column grid for cards -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
          >
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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

            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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

            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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

            <!-- Card 1 -->
            <div
              class="rounded-xl overflow-hidden flex flex-col items-start w-full max-w-full mx-auto bg-[#faf5ef] shadow-sm"
            >
              <img
                src="/CozyLeaf/biryani.png"
                alt="Gulab Jamun"
                class="w-full h-40 sm:h-48 object-contain bg-transparent"
              />

              <div class="p-3 sm:p-4 w-full">
                <div class="flex flex-col items-start mb-2">
                  <h3 class="text-base sm:text-xl text-[#1E1E1E] font-semibold">
                    Chicken Biryani
                  </h3>
                  <span
                    class="text-[#800000] font-semibold text-sm sm:text-base"
                  >
                    ₹250
                  </span>
                </div>

                <p
                  class="text-xs sm:text-sm text-[#00000099] mb-4 text-justify"
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
            <!-- Add more cards here if needed -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
