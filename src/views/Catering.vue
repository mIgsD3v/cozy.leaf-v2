<script setup></script>
<template>
  <section
    class="relative z-0 w-full min-h-[650px] xl:min-h-[720px] bg-no-repeat bg-center bg-cover bg-[#faf5ef] px-4 py-10"
  >
    <!-- Brightness Overlay -->
    <div
      class="absolute inset-0 bg-[#faf5ef] opacity-80 z-10"
      style="backdrop-filter: brightness(0.8)"
    ></div>

    <!-- Grid Content -->
    <div
      class="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10"
    >
      <!-- Left Column (Updated Text Style) -->
      <div
        class="mt-10 md:mt-20 p-4 sm:p-6 w-full text-gray-800 text-base leading-relaxed"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h3
          class="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-5xl text-[#800000] leading-tight mb-4"
        >
          Bulk Order & Catering
        </h3>

        <p
          class="font-body text-base text-[#00000099] sm:text-lg md:text-xl lg:text-xl max-w-xl mb-4"
        >
          Planning a special event or corporate gathering? We’ve got you covered
          with delicious homestyle Indian meals.
        </p>

        <ul
          class="ml-0 text-[#00000099] font-body text-base sm:text-lg md:text-xl lg:text-xl max-w-xl space-y-2"
        >
          <li class="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 text-[#800000] mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-[#00000099]"
              >Ideal for birthdays, weddings, office events, or festivals</span
            >
          </li>

          <li class="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 text-[#800000] mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-[#00000099]"
              >Minimum 10 pax required for catering orders</span
            >
          </li>

          <li class="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 text-[#800000] mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-[#00000099]"
              >Customizable dishes available upon request</span
            >
          </li>

          <li class="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 text-[#800000] mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-[#00000099]"
              >Submit at least 3 days before the event</span
            >
          </li>
        </ul>
      </div>

      <div class="md:mt-20 p-4 sm:p-6" data-aos="fade-up" data-aos-delay="100">
        <div class="relative z-10 max-w-3xl w-full">
          <h2
            class="text-xl sm:text-3xl font-headline font-semi-bold text-black mb-2"
          >
            Let’s Cater Your Next Event
          </h2>

          <p class="text-xs sm:text-sm md:text-base text-black font-body mb-6">
            Kindly fill out the form below to send your catering or bulk order
            request.
          </p>

          <form @submit.prevent="submitForm" class="space-y-4">
            <input
              class="w-full py-2 px-4 rounded border border-[#00000099] bg-transparent text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black font-body text-sm sm:text-base md:text-lg"
              type="text"
              placeholder="Name*"
              name="name"
              required
            />

            <input
              class="w-full py-2 px-4 rounded border border-[#00000099] bg-transparent text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black font-body text-sm sm:text-base md:text-lg"
              type="text"
              placeholder="Email"
              name="phone"
              required
            />

            <input
              class="w-full py-2 px-4 rounded border border-[#00000099] bg-transparent text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black font-body text-sm sm:text-base md:text-lg"
              type="date"
              name="eventDate"
              required
            />

            <input
              class="w-full py-2 px-4 rounded border border-[#00000099] bg-transparent text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black font-body text-sm sm:text-base md:text-lg"
              type="number"
              placeholder="Number of People*"
              name="people"
              min="1"
              required
            />

            <textarea
              class="w-full py-2 px-4 rounded border border-[#00000099] bg-transparent text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black font-body text-sm sm:text-base md:text-lg"
              rows="4"
              placeholder="Message..."
              name="message..."
            ></textarea>

            <div class="flex justify-center sm:justify-end">
              <button
                type="submit"
                class="bg-[#800000] text-white font-medium py-2 px-10 rounded-full w-full sm:w-auto hover:bg-[#D4AF37] hover:text-[#800000] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
