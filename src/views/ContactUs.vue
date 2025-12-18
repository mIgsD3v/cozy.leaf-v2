<script setup></script>
<template>
  <section
    class="relative z-0 w-full min-h-[650px] xl:min-h-[720px] bg-no-repeat bg-center bg-cover bg-white px-4 py-10"
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
      <!-- Left Column (Contact Info with Inline SVG Icons and Hover Effects) -->
      <div
        class="mt-10 md:mt-20 p-4 sm:p-6 w-full text-[#800000] text-base leading-relaxed"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h3
          class="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-5xl text-[#800000] leading-tight mb-6"
        >
          Let’s Bring Homestyle Indian Food to Your Table
        </h3>

        <ul
          class="text-left text-gray-700 font-body text-sm sm:text-base lg:text-[15px] max-w-xl"
        >
          <li class="flex items-center gap-4 p-4 hover:scale-[1.02] transition">
            <!-- WhatsApp Icon -->
            <svg class="w-6 h-6 fill-[#800000]" viewBox="0 0 32 32">
              <path
                d="M16 2.933C8.82 2.933 2.933 8.82 2.933 16a12.933 12.933 0 001.779 6.563L2 30l7.653-2.536A13 13 0 1016 2.933zm0 23.46a10.4 10.4 0 01-5.278-1.472l-.378-.225-4.542 1.506 1.502-4.443-.247-.4A10.407 10.407 0 1116 26.393zm5.975-7.593c-.329-.165-1.947-.96-2.25-1.068-.302-.108-.521-.165-.74.165s-.85 1.068-1.042 1.29c-.191.22-.382.246-.711.082-.329-.165-1.389-.513-2.646-1.636-.978-.872-1.637-1.948-1.828-2.276-.191-.329-.021-.507.144-.671.148-.147.329-.382.493-.573.165-.192.22-.329.329-.548.109-.219.055-.41-.027-.575-.083-.165-.74-1.783-1.014-2.446-.267-.64-.539-.552-.74-.561l-.63-.011c-.219 0-.575.082-.876.41s-1.15 1.123-1.15 2.738c0 1.615 1.178 3.177 1.34 3.396.165.22 2.316 3.538 5.615 4.96.785.34 1.398.544 1.875.697.788.25 1.506.215 2.073.131.633-.093 1.947-.795 2.222-1.562.274-.767.274-1.423.192-1.562-.082-.14-.301-.22-.63-.384z"
              />
            </svg>
            <span
              class="font-body text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 italic max-w-xl mb-4"
              >+63 912 345 6789</span
            >
          </li>

          <li class="flex items-center gap-4 p-4 hover:scale-[1.02] transition">
            <!-- Phone Icon -->
            <svg class="w-6 h-6 fill-[#800000]" viewBox="0 0 24 24">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.2 1.38.6 2.71 1.17 3.95a2 2 0 01-.45 2.11L8.09 11a16 16 0 006.91 6.91l1.22-1.22a2 2 0 012.11-.45c1.24.57 2.57.97 3.95 1.17A2 2 0 0122 16.92z"
              />
            </svg>
            <span
              class="font-body text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 italic max-w-xl mb-4"
              >+63 2 8123 4567</span
            >
          </li>

          <li class="flex items-center gap-4 p-4 hover:scale-[1.02] transition">
            <!-- Email Icon -->
            <svg class="w-6 h-6 fill-[#800000]" viewBox="0 0 24 24">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z"
              />
            </svg>
            <span
              class="font-body text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 italic max-w-xl mb-4"
              >negishearth@gmail.com</span
            >
          </li>

          <li class="flex items-center gap-4 p-4 hover:scale-[1.02] transition">
            <!-- Location Icon -->
            <svg class="w-6 h-6 fill-[#800000]" viewBox="0 0 24 24">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"
              />
            </svg>
            <span
              class="font-body text-base sm:text-lg md:text-xl lg:text-1xl text-gray-700 italic max-w-xl mb-4"
              >Madurai, Tamil Nadu, India</span
            >
          </li>
        </ul>
      </div>

      <!-- Right Column (Simplified Form with Background Card) -->
      <div class="md:mt-10 p-4 sm:p-6" data-aos="fade-up" data-aos-delay="100">
        <!-- Map -->
        <div
          class="mt-8 w-full border-1 border-[#4E342E] overflow-hidden rounded-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70334.07019003693!2d78.08153808687436!3d9.917918876394642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu%2C%20India!5e1!3m2!1sen!2sph!4v1754389307061!5m2!1sen!2sph"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
