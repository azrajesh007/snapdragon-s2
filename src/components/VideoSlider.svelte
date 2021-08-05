<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/swiper.scss';
    import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
</script>

<Swiper 
    slidesPerView={3.5}
    pagination={{ clickable: true }}
    navigation
    scrollbar={{ draggable: true }}
    breakpoints='{{
        "320": {
          "slidesPerView": 1,
        },
        "480": {
          "slidesPerView": 1,
        },
        "640": {
          "slidesPerView": 1.6,
        },
        "730": {
          "slidesPerView": 1.8,
        },
        "768": {
          "slidesPerView": 2,
        },
        "1024": {
          "slidesPerView": 2.4,
        },
        "1025": {
          "slidesPerView": 2,
        },
        "1200": {
          "slidesPerView": 2.3,
        },
        "1280": {
          "slidesPerView": 2.5,
        },
        "1380": {
          "slidesPerView": 3,
        }
      }}'
  >
  <slot></slot>
</Swiper>