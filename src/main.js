import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router"; // ✅ imported router
import { createPinia } from "pinia";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const app = createApp(App);

app.use(createPinia());
app.use(router); // ✅ make sure to use the router

app.mount("#app");
