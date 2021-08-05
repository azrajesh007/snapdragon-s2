<script>
	import VideoModal from '../components/modal/VideoModal.svelte';
	import Modal from '../utils/modal.js';
	import Video from '../components/Video.svelte';
	import {RESTClient} from '../utils/rest';
    import VideoSlider from '../components/VideoSlider.svelte';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
import Insider from '../layouts/partials/Insider.svelte';
  
	let videos = 
    [
        {
            "id": 89,
            "status": "published",
            "sort": 87,
            "owner": 11,
            "created_on": "2021-03-15T09:53:27.000Z",
            "name": "[BENGALI] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 2",
            "url": "https://youtu.be/e7XKdYyUmpY",
            "thumbnail": 103,
            "live": 0,
            "filename_disk": "fe8e4ff0-dd4a-4660-9396-8cffe2d1bf95.jpg"
        },
        {
            "id": 88,
            "status": "published",
            "sort": 86,
            "owner": 11,
            "created_on": "2021-03-15T09:52:56.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 2",
            "url": "https://youtu.be/a_YKaOqOP4o",
            "thumbnail": 102,
            "live": 0,
            "filename_disk": "5c9a5556-a6ee-429b-b01e-768318d71ff4.jpg"
        },
        {
            "id": 87,
            "status": "published",
            "sort": 85,
            "owner": 11,
            "created_on": "2021-03-15T09:52:16.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 2",
            "url": "https://youtu.be/TX5kwmWKK28",
            "thumbnail": 101,
            "live": 0,
            "filename_disk": "4601151a-1a40-45a3-bd52-9c5c79bf49dd.jpg"
        },
        {
            "id": 86,
            "status": "published",
            "sort": 84,
            "owner": 11,
            "created_on": "2021-03-15T09:51:26.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 1",
            "url": "https://youtu.be/7a-ScTb_VWQ",
            "thumbnail": 100,
            "live": 0,
            "filename_disk": "d4e4ff96-a583-404f-9053-0d30e2ba3e2b.jpg"
        },
        {
            "id": 85,
            "status": "published",
            "sort": 83,
            "owner": 11,
            "created_on": "2021-03-15T09:47:50.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 1",
            "url": "https://youtu.be/LIFSHOhGCtE",
            "thumbnail": 99,
            "live": 0,
            "filename_disk": "bb29d51d-2601-4126-b197-344c0fc7dc1b.jpg"
        },
        {
            "id": 84,
            "status": "published",
            "sort": 82,
            "owner": 11,
            "created_on": "2021-03-15T09:47:15.000Z",
            "name": "[BENGALI] CONQUEST: FREE FIRE OPEN | GRAND FINALS | DAY 1",
            "url": "https://youtu.be/lX1bBv3jL34",
            "thumbnail": 98,
            "live": 0,
            "filename_disk": "29825f62-f3e5-4476-8c61-8a0b015eac90.jpg"
        },
        {
            "id": 83,
            "status": "published",
            "sort": 81,
            "owner": 11,
            "created_on": "2021-03-15T09:46:29.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | PRE-FINALS | DAY 2",
            "url": "https://youtu.be/8f8tTG7pj9o",
            "thumbnail": 97,
            "live": 0,
            "filename_disk": "f21e61b8-28a4-4323-8674-9f0ba9d902cb.jpg"
        },
        {
            "id": 82,
            "status": "published",
            "sort": 80,
            "owner": 11,
            "created_on": "2021-03-15T09:45:41.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | PRE-FINALS| DAY 1 | PART 2",
            "url": "https://youtu.be/H-lltTkKkMk",
            "thumbnail": 96,
            "live": 0,
            "filename_disk": "79bc73ca-0677-4f0e-bef8-7422e0a058ff.jpg"
        },
        {
            "id": 81,
            "status": "published",
            "sort": 79,
            "owner": 11,
            "created_on": "2021-03-15T09:44:46.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | PRE-FINALS | DAY 1 | PART 1",
            "url": "https://youtu.be/5U8Tej0qMm8",
            "thumbnail": 95,
            "live": 0,
            "filename_disk": "e7f648c3-039e-4949-800f-0d46969bb55e.jpg"
        },
        {
            "id": 80,
            "status": "published",
            "sort": 78,
            "owner": 11,
            "created_on": "2021-03-15T09:43:58.000Z",
            "name": "CONQUEST: GAMING FTW | Episode 4 ft  Total Gaming  Esports | Viewer Games | Diamond Giveaways",
            "url": "https://youtu.be/13EF-7VFGMk",
            "thumbnail": 94,
            "live": 0,
            "filename_disk": "20792272-5628-45c4-9504-345042fd3949.jpg"
        },
        {
            "id": 79,
            "status": "published",
            "sort": 77,
            "owner": 11,
            "created_on": "2021-03-15T09:43:09.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 4 - DAY 3",
            "url": "https://youtu.be/KMuW6RSFDVA",
            "thumbnail": 93,
            "live": 0,
            "filename_disk": "f0fdbae7-d43d-4721-8168-f6a3a1b23648.jpg"
        },
        {
            "id": 78,
            "status": "published",
            "sort": 76,
            "owner": 11,
            "created_on": "2021-03-15T09:42:32.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 4 - DAY 3",
            "url": "https://youtu.be/AXG7L0N5VME",
            "thumbnail": 92,
            "live": 0,
            "filename_disk": "7584449b-f368-408e-90ed-e96d43daab6b.jpg"
        },
        {
            "id": 77,
            "status": "published",
            "sort": 75,
            "owner": 11,
            "created_on": "2021-03-15T09:41:44.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 4 - DAY 2",
            "url": "https://youtu.be/x0u7cyF1LjY",
            "thumbnail": 91,
            "live": 0,
            "filename_disk": "9ba78043-a5d9-4cb8-8edd-1ff8ee26c6fc.jpg"
        },
        {
            "id": 76,
            "status": "published",
            "sort": 74,
            "owner": 11,
            "created_on": "2021-03-15T09:41:05.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 4 - DAY 2",
            "url": "https://youtu.be/wl-TGGEh6oE",
            "thumbnail": 90,
            "live": 0,
            "filename_disk": "fbf3e905-048f-4496-b3ba-4dd053d2b1dc.jpg"
        },
        {
            "id": 75,
            "status": "published",
            "sort": 73,
            "owner": 11,
            "created_on": "2021-03-15T09:39:51.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 4 - DAY 1",
            "url": "https://youtu.be/-ScTXIV0rOU",
            "thumbnail": 89,
            "live": 0,
            "filename_disk": "8af11ecf-9329-418d-82be-a0afae563426.jpg"
        },
        {
            "id": 74,
            "status": "published",
            "sort": 72,
            "owner": 11,
            "created_on": "2021-03-15T09:39:12.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 4 - DAY 1",
            "url": "https://youtu.be/VKRgfd94ha8",
            "thumbnail": 88,
            "live": 0,
            "filename_disk": "997b3b34-107f-4cd7-b20c-b88082b738ff.jpg"
        },
        {
            "id": 73,
            "status": "published",
            "sort": 71,
            "owner": 11,
            "created_on": "2021-03-15T09:38:26.000Z",
            "name": "CONQUEST: GAMING FTW | Episode 3 ft  @FAB INDRO GAMING   | Viewer Games | Diamond Giveaways",
            "url": "https://youtu.be/W2nVsVRVfvM",
            "thumbnail": 87,
            "live": 0,
            "filename_disk": "0bda70dd-282d-43fc-9fc4-64d0685b0a2b.jpg"
        },
        {
            "id": 72,
            "status": "published",
            "sort": 70,
            "owner": 11,
            "created_on": "2021-03-15T09:37:32.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 3 - DAY 3",
            "url": "https://youtu.be/Jnte4P6x8YA",
            "thumbnail": 86,
            "live": 0,
            "filename_disk": "72220767-2904-4d4d-a6c3-4018722fc7df.jpg"
        },
        {
            "id": 71,
            "status": "published",
            "sort": 69,
            "owner": 11,
            "created_on": "2021-03-15T09:36:54.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 3 - DAY 3",
            "url": "https://youtu.be/UxXN7i9Ku3s",
            "thumbnail": 85,
            "live": 0,
            "filename_disk": "57bb2479-3189-46a1-9758-cfa9cf52a99f.jpg"
        },
        {
            "id": 70,
            "status": "published",
            "sort": 68,
            "owner": 11,
            "created_on": "2021-03-15T09:35:58.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 3 - DAY 2",
            "url": "https://youtu.be/JV1NyP6WAIo",
            "thumbnail": 84,
            "live": 0,
            "filename_disk": "a4554dc7-9f36-4c31-89bb-6a8a5c16b62d.jpg"
        },
        {
            "id": 69,
            "status": "published",
            "sort": 67,
            "owner": 11,
            "created_on": "2021-03-15T09:35:15.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 3 - DAY 2",
            "url": "https://youtu.be/KgsdJjES-Fg",
            "thumbnail": 83,
            "live": 0,
            "filename_disk": "4e933aff-9a12-4399-8228-ceaa6e2b2209.jpg"
        },
        {
            "id": 68,
            "status": "published",
            "sort": 66,
            "owner": 11,
            "created_on": "2021-03-15T09:34:29.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 3 - DAY 1",
            "url": "https://youtu.be/WJG4JXfwFik",
            "thumbnail": 82,
            "live": 0,
            "filename_disk": "a4bd2160-8863-469c-a771-3c7d94011244.jpg"
        },
        {
            "id": 67,
            "status": "published",
            "sort": 65,
            "owner": 11,
            "created_on": "2021-03-15T09:33:45.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 3 - DAY 1",
            "url": "https://youtu.be/QBwLKPb1eCo",
            "thumbnail": 81,
            "live": 0,
            "filename_disk": "80640c77-ec87-4319-8018-96ae70c5a970.jpg"
        },
        {
            "id": 66,
            "status": "published",
            "sort": 64,
            "owner": 11,
            "created_on": "2021-03-15T09:32:47.000Z",
            "name": "CONQUEST: GAMING FTW | Episode 2 ft @Jonty Gaming | Viewer Games | Diamond Giveaways",
            "url": "https://youtu.be/-XSD8KTqOg0",
            "thumbnail": 80,
            "live": 0,
            "filename_disk": "8695082b-8e37-490d-b1a1-9cf38cf70a65.jpg"
        },
        {
            "id": 64,
            "status": "published",
            "sort": 63,
            "owner": 11,
            "created_on": "2021-03-15T09:29:56.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 3 - DAY 1",
            "url": "https://youtu.be/Gu9omvMl30g",
            "thumbnail": 78,
            "live": 0,
            "filename_disk": "08c94503-7e38-4a2d-9e9b-e67917e0c20e.jpg"
        },
        {
            "id": 63,
            "status": "published",
            "sort": 62,
            "owner": 11,
            "created_on": "2021-03-15T09:29:07.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 3 - DAY 2",
            "url": "https://youtu.be/oa7yJw5R4ws",
            "thumbnail": 77,
            "live": 0,
            "filename_disk": "106e9daa-d9ae-4140-ab7e-8058f99625cf.jpg"
        },
        {
            "id": 62,
            "status": "published",
            "sort": 61,
            "owner": 11,
            "created_on": "2021-03-15T09:28:14.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 3 - DAY 3",
            "url": "https://youtu.be/P5rgnqGem_E",
            "thumbnail": 76,
            "live": 0,
            "filename_disk": "1ae08bf0-cafa-430a-830a-e7ea348cdb00.jpg"
        },
        {
            "id": 61,
            "status": "published",
            "sort": 60,
            "owner": 11,
            "created_on": "2021-03-15T09:26:56.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 3 | WEEKLY ROUND-UP",
            "url": "https://youtu.be/C7bXWArKbNI",
            "thumbnail": 75,
            "live": 0,
            "filename_disk": "1c6b4ac5-f36f-4369-857d-dc882d3e26ac.jpg"
        },
        {
            "id": 60,
            "status": "published",
            "sort": 59,
            "owner": 11,
            "created_on": "2021-03-15T09:25:42.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 4 - DAY 1",
            "url": "https://youtu.be/srGYz_Yjlnw",
            "thumbnail": 74,
            "live": 0,
            "filename_disk": "e9a0d334-3d4c-4695-a71b-fc58bb8b1a8a.jpg"
        },
        {
            "id": 59,
            "status": "published",
            "sort": 58,
            "owner": 11,
            "created_on": "2021-03-15T09:24:45.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 4 - DAY 2",
            "url": "https://youtu.be/gCVrClb1ik4",
            "thumbnail": 73,
            "live": 0,
            "filename_disk": "232ce1cf-a33c-4681-8edb-b358ff41a6d0.jpg"
        },
        {
            "id": 58,
            "status": "published",
            "sort": 57,
            "owner": 11,
            "created_on": "2021-03-15T09:24:05.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 4 - DAY 3",
            "url": "https://youtu.be/ZheEkYK4phw",
            "thumbnail": 72,
            "live": 0,
            "filename_disk": "9760fffc-5e08-442d-b621-4365fe01d68b.jpg"
        },
        {
            "id": 57,
            "status": "published",
            "sort": 55,
            "owner": 11,
            "created_on": "2021-03-15T09:23:25.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 4 | WEEKLY ROUND-UP",
            "url": "https://youtu.be/GWsAyPTvRuk",
            "thumbnail": 71,
            "live": 0,
            "filename_disk": "e66fa0c1-b604-4426-a932-31a9a0f0032b.jpg"
        },
        {
            "id": 56,
            "status": "published",
            "sort": 54,
            "owner": 11,
            "created_on": "2021-03-15T09:22:46.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | GRAND FINALS | OFFICIAL TRAILER​",
            "url": "https://youtu.be/6nKxUsAFKIM",
            "thumbnail": 70,
            "live": 0,
            "filename_disk": "920e3e8f-ea03-4469-b4e6-bc099789d3bb.jpg"
        },
        {
            "id": 55,
            "status": "published",
            "sort": 53,
            "owner": 11,
            "created_on": "2021-03-15T09:22:07.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | TEAM SPOTLIGHT & INTERVIEW | HEX ESPORTS​",
            "url": "https://youtu.be/1C1Tvh85L8c",
            "thumbnail": 69,
            "live": 0,
            "filename_disk": "48d67f64-860d-49a5-b06f-ddedc2710a3e.jpg"
        },
        {
            "id": 54,
            "status": "published",
            "sort": 52,
            "owner": 11,
            "created_on": "2021-03-15T09:21:25.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | TEAM SPOTLIGHT & INTERVIEW | GALAXY RACER",
            "url": "https://youtu.be/V7zvuKmbTBE",
            "thumbnail": 68,
            "live": 0,
            "filename_disk": "6245431a-4f42-414d-b4df-dad09a76ec39.jpg"
        },
        {
            "id": 53,
            "status": "published",
            "sort": 51,
            "owner": 11,
            "created_on": "2021-03-15T09:20:40.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | TEAM SPOTLIGHT & INTERVIEW | SURVIVOR 4AM",
            "url": "https://youtu.be/1xywIP9uQvE",
            "thumbnail": 67,
            "live": 0,
            "filename_disk": "2ed23977-13d3-418a-b809-9c840cc8ad04.jpg"
        },
        {
            "id": 52,
            "status": "published",
            "sort": 50,
            "owner": 11,
            "created_on": "2021-03-15T09:20:07.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | TEAM SPOTLIGHT & INTERVIEW | TEAM CHAOS",
            "url": "https://youtu.be/1elCNI0tBkk",
            "thumbnail": 66,
            "live": 0,
            "filename_disk": "0673cac0-8ff4-4ff2-87b0-b5f85f58c25d.jpg"
        },
        {
            "id": 50,
            "status": "published",
            "sort": 49,
            "owner": 11,
            "created_on": "2021-03-15T09:18:32.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | GRAND FINALS | FINAL TOP 12 TEAMS",
            "url": "https://youtu.be/Q4ndWz2iACI",
            "thumbnail": 64,
            "live": 0,
            "filename_disk": "38b75d54-90f3-4b7b-89b8-14ddfd32c506.jpg"
        },
        {
            "id": 51,
            "status": "published",
            "sort": 48,
            "owner": 11,
            "created_on": "2021-03-15T09:19:15.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | TEAM SPOTLIGHT & INTERVIEW | 4 UNKNOWN",
            "url": "https://youtu.be/yGrlN4E487I",
            "thumbnail": 65,
            "live": 0,
            "filename_disk": "9986548d-e41a-4498-b91d-cfed6a840dc1.jpg"
        },
        {
            "id": 49,
            "status": "published",
            "sort": 47,
            "owner": 11,
            "created_on": "2021-03-15T09:17:57.000Z",
            "name": "Welcome to Snapdragon Insiders program for Snapdragon enthusiasts",
            "url": "https://youtu.be/o8w9y4qRuxg",
            "thumbnail": 63,
            "live": 0,
            "filename_disk": "d143e851-eaa2-46bf-8094-7b24dafd36d1.jpg"
        },
        {
            "id": 48,
            "status": "published",
            "sort": 46,
            "owner": 11,
            "created_on": "2021-03-15T09:17:22.000Z",
            "name": "GRAND FINALS HIGHLIGHTS | CONQUEST: FREE FIRE OPEN | DAY 1",
            "url": "https://youtu.be/6_p2IYnLZd0",
            "thumbnail": 62,
            "live": 0,
            "filename_disk": "8fc725a1-d26c-451f-9571-006d34cdba31.jpg"
        },
        {
            "id": 47,
            "status": "published",
            "sort": 45,
            "owner": 11,
            "created_on": "2021-03-15T09:16:28.000Z",
            "name": "GRAND FINALS HIGHLIGHTS | CONQUEST: FREE FIRE OPEN | DAY 2",
            "url": "https://youtu.be/HbdHhZrgIbU",
            "thumbnail": 61,
            "live": 0,
            "filename_disk": "3476a449-2693-41f3-aabf-c70bba5d25fb.jpg"
        },
        {
            "id": 7,
            "status": "published",
            "sort": 44,
            "owner": 1,
            "created_on": "2021-01-13T18:12:19.000Z",
            "name": "Video 6",
            "url": "https://www.youtube.com/watch?v=X-TWnYfuQgY",
            "thumbnail": 4,
            "live": 0,
            "filename_disk": "30b99033-a6d6-4b93-99e5-9959704c51f1.jpeg"
        },
        {
            "id": 6,
            "status": "published",
            "sort": 43,
            "owner": 1,
            "created_on": "2021-01-13T18:11:42.000Z",
            "name": "Video 5",
            "url": "https://www.youtube.com/watch?v=v1Js7pSAuvM",
            "thumbnail": 8,
            "live": 0,
            "filename_disk": "d7c5af8f-a602-4a5c-ad48-ac6b433d7f4e.jpeg"
        },
        {
            "id": 5,
            "status": "published",
            "sort": 42,
            "owner": 1,
            "created_on": "2021-01-13T18:10:45.000Z",
            "name": "Video 4",
            "url": "https://www.youtube.com/watch?v=Vbone1mZpAA",
            "thumbnail": 7,
            "live": 0,
            "filename_disk": "dc5ae723-1d5d-46de-93b2-1882a2053cba.jpeg"
        },
        {
            "id": 4,
            "status": "published",
            "sort": 41,
            "owner": 1,
            "created_on": "2021-01-13T18:09:52.000Z",
            "name": "Video 3",
            "url": "https://www.youtube.com/watch?v=mG2p3PoThbc",
            "thumbnail": 6,
            "live": 0,
            "filename_disk": "624614aa-5a73-48eb-8687-0f82f2a1dcea.jpeg"
        },
        {
            "id": 3,
            "status": "published",
            "sort": 40,
            "owner": 1,
            "created_on": "2021-01-13T17:18:31.000Z",
            "name": "Video 2",
            "url": "https://www.youtube.com/watch?v=TSqkspMzTCU",
            "thumbnail": 5,
            "live": 0,
            "filename_disk": "98ac830e-336a-459b-8bac-a84724208089.jpeg"
        },
        {
            "id": 1,
            "status": "published",
            "sort": 39,
            "owner": 1,
            "created_on": "2021-01-13T14:01:14.000Z",
            "name": "Main Vide",
            "url": "https://www.youtube.com/watch?v=LjSX7wYgx4o",
            "thumbnail": 4,
            "live": 0,
            "filename_disk": "30b99033-a6d6-4b93-99e5-9959704c51f1.jpeg"
        },
        {
            "id": 16,
            "status": "published",
            "sort": 38,
            "owner": 11,
            "created_on": "2021-01-21T17:39:48.000Z",
            "name": "CONQUEST: GAMING FTW Episode 1 featuring @vasiyoCRJ 7",
            "url": "https://youtu.be/y8gceMELYoU?t=1110",
            "thumbnail": 20,
            "live": 0,
            "filename_disk": "132a6011-e600-42fa-8f03-1582596307af.jpg"
        },
        {
            "id": 9,
            "status": "published",
            "sort": 37,
            "owner": 2,
            "created_on": "2021-01-18T11:41:02.000Z",
            "name": "[ENGLISH] Playoffs Round 2 - Day 1 - Broadcast",
            "url": "https://www.youtube.com/watch?v=BXb6IG7lu-o",
            "thumbnail": 10,
            "live": 0,
            "filename_disk": "0c9a1357-d9f4-4010-be5e-53bb45c36d26.jpg"
        },
        {
            "id": 8,
            "status": "published",
            "sort": 36,
            "owner": 2,
            "created_on": "2021-01-18T11:26:45.000Z",
            "name": "[HINDI] Playoffs Round 2 - Day 1 - Broadcast",
            "url": "https://www.youtube.com/watch?v=AyJQDlQ1BSw",
            "thumbnail": 9,
            "live": 0,
            "filename_disk": "dcc91e73-9de7-42e1-b84c-a3d88adb8613.jpg"
        },
        {
            "id": 17,
            "status": "published",
            "sort": 35,
            "owner": 11,
            "created_on": "2021-01-21T17:41:40.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 2 - DAY 1",
            "url": "https://youtu.be/nV2ADsFieTs",
            "thumbnail": 21,
            "live": 0,
            "filename_disk": "1a9d98e1-fe65-4bc8-ac52-7775b9117563.jpg"
        },
        {
            "id": 11,
            "status": "published",
            "sort": 34,
            "owner": 2,
            "created_on": "2021-01-19T11:04:01.000Z",
            "name": "[ENGLISH] Playoffs Round 2 - Day 2 - Broadcast",
            "url": "https://www.youtube.com/watch?v=3Guu08mHguI",
            "thumbnail": 11,
            "live": 0,
            "filename_disk": "114eb49f-768e-408c-a900-66e6b04f1530.png"
        },
        {
            "id": 10,
            "status": "published",
            "sort": 33,
            "owner": 2,
            "created_on": "2021-01-19T11:02:18.000Z",
            "name": "[HINDI] Playoffs Round 2 - Day 2 - Broadcast",
            "url": "https://www.youtube.com/watch?v=6JYMNMH6FKs",
            "thumbnail": 11,
            "live": 0,
            "filename_disk": "114eb49f-768e-408c-a900-66e6b04f1530.png"
        },
        {
            "id": 18,
            "status": "published",
            "sort": 32,
            "owner": 11,
            "created_on": "2021-01-21T17:42:48.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 2 - DAY 2",
            "url": "https://youtu.be/lf4IdNometI",
            "thumbnail": 22,
            "live": 0,
            "filename_disk": "11ecc105-3613-408e-adc9-03ffa1561c76.jpg"
        },
        {
            "id": 13,
            "status": "published",
            "sort": 31,
            "owner": 11,
            "created_on": "2021-01-20T11:13:45.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 2 - DAY 3",
            "url": "https://youtu.be/9iJ7TP4H7zg",
            "thumbnail": 16,
            "live": 0,
            "filename_disk": "8704aa67-f734-4232-a7e3-cc793d0de978.jpg"
        },
        {
            "id": 12,
            "status": "published",
            "sort": 30,
            "owner": 11,
            "created_on": "2021-01-20T11:12:23.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 2 - DAY 3",
            "url": "https://youtu.be/GBdaKMuDx7Y",
            "thumbnail": 15,
            "live": 0,
            "filename_disk": "94d7b798-6631-4672-bf15-ace87f591229.jpg"
        },
        {
            "id": 19,
            "status": "published",
            "sort": 29,
            "owner": 11,
            "created_on": "2021-01-21T17:45:28.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 2 - DAY 3",
            "url": "https://youtu.be/Sw-iJ-hqtUU",
            "thumbnail": 23,
            "live": 0,
            "filename_disk": "5e032048-96ba-4431-a4e7-aa0a3fcd8870.jpg"
        },
        {
            "id": 14,
            "status": "published",
            "sort": 28,
            "owner": 11,
            "created_on": "2021-01-21T11:17:08.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 1",
            "url": "https://www.youtube.com/watch?v=-IrHnSJBWjw",
            "thumbnail": 24,
            "live": 0,
            "filename_disk": "8e5eba3d-38fb-4f88-85b3-a02ebfb46d0d.jpg"
        },
        {
            "id": 15,
            "status": "published",
            "sort": 27,
            "owner": 11,
            "created_on": "2021-01-21T11:18:04.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 1",
            "url": "https://www.youtube.com/watch?v=_tvZClWLJiI",
            "thumbnail": 25,
            "live": 0,
            "filename_disk": "a3c04519-eae6-47cd-b0fd-a425d3012dfa.jpg"
        },
        {
            "id": 23,
            "status": "published",
            "sort": 26,
            "owner": 11,
            "created_on": "2021-01-22T11:58:45.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 3 - DAY 1",
            "url": "https://youtu.be/v2USkufvabU",
            "thumbnail": 30,
            "live": 0,
            "filename_disk": "77970e7a-e418-4163-a2cf-481a77c67f2a.png"
        },
        {
            "id": 20,
            "status": "published",
            "sort": 25,
            "owner": 11,
            "created_on": "2021-01-22T11:50:17.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 2",
            "url": "https://youtu.be/mddhLi0kRbc",
            "thumbnail": 26,
            "live": 0,
            "filename_disk": "7e56daad-282c-43e1-88d3-6c17cbad4e7d.jpg"
        },
        {
            "id": 21,
            "status": "published",
            "sort": 24,
            "owner": 11,
            "created_on": "2021-01-22T11:51:08.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 2",
            "url": "https://youtu.be/KOl9KOnNsJA",
            "thumbnail": 27,
            "live": 0,
            "filename_disk": "e3c3b3fb-4260-4c94-8202-205a51b43b21.jpg"
        },
        {
            "id": 24,
            "status": "published",
            "sort": 23,
            "owner": 11,
            "created_on": "2021-01-23T10:49:29.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 3 - DAY 2",
            "url": "https://youtu.be/56srIyUIxFM",
            "thumbnail": 32,
            "live": 0,
            "filename_disk": "7372bdaa-9e70-4be0-9ce7-95cf13a622db.png"
        },
        {
            "id": 25,
            "status": "published",
            "sort": 22,
            "owner": 11,
            "created_on": "2021-01-23T10:54:59.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 3",
            "url": "https://youtu.be/2yqM-UQvLIU",
            "thumbnail": 33,
            "live": 0,
            "filename_disk": "b008bf3f-8599-495f-b72d-b17d60bac852.jpg"
        },
        {
            "id": 26,
            "status": "published",
            "sort": 21,
            "owner": 11,
            "created_on": "2021-01-23T10:56:27.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | PLAYOFFS | ROUND 3 - DAY 3",
            "url": "https://youtu.be/GbkI7QhLcvQ",
            "thumbnail": 34,
            "live": 0,
            "filename_disk": "984e9b13-a48b-494c-baa8-6734a1c38760.jpg"
        },
        {
            "id": 30,
            "status": "published",
            "sort": 20,
            "owner": 11,
            "created_on": "2021-01-31T11:45:35.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | PLAYOFFS ROUND 3 - DAY 3",
            "url": "https://youtu.be/NRuOaS1aQM8",
            "thumbnail": 39,
            "live": 0,
            "filename_disk": "6619254c-ac2b-4ea3-a015-368b0ff8883a.jpg"
        },
        {
            "id": 27,
            "status": "published",
            "sort": 19,
            "owner": 11,
            "created_on": "2021-01-31T11:41:10.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 1 - DAY 1",
            "url": "https://youtu.be/XvMy7gI0flM",
            "thumbnail": 36,
            "live": 0,
            "filename_disk": "d7cdafd8-a792-4a53-951e-b6083b1092bd.png"
        },
        {
            "id": 28,
            "status": "published",
            "sort": 18,
            "owner": 11,
            "created_on": "2021-01-31T11:42:13.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 1 - DAY 1",
            "url": "https://youtu.be/_l5aBWpqbao",
            "thumbnail": 37,
            "live": 0,
            "filename_disk": "c1bccc3c-d60f-4146-9d6e-e720ae34d6ba.png"
        },
        {
            "id": 29,
            "status": "published",
            "sort": 17,
            "owner": 11,
            "created_on": "2021-01-31T11:43:47.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 1 - DAY 1",
            "url": "https://youtu.be/PYg--PQQHus",
            "thumbnail": 38,
            "live": 0,
            "filename_disk": "febd6bdc-d95f-41ce-8879-99b2bbb2d19a.png"
        },
        {
            "id": 31,
            "status": "published",
            "sort": 16,
            "owner": 11,
            "created_on": "2021-01-31T11:47:13.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 1 - DAY 2",
            "url": "https://youtu.be/mMuZp4FPejU",
            "thumbnail": 40,
            "live": 0,
            "filename_disk": "3605527a-e300-4d51-b3d9-9a791a2f649b.png"
        },
        {
            "id": 32,
            "status": "published",
            "sort": 15,
            "owner": 11,
            "created_on": "2021-01-31T11:48:31.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 1 - DAY 2",
            "url": "https://youtu.be/y-D7cY73lyw",
            "thumbnail": 41,
            "live": 0,
            "filename_disk": "bda7619e-0595-4e60-bc1f-4c29fd6d0980.png"
        },
        {
            "id": 33,
            "status": "published",
            "sort": 14,
            "owner": 11,
            "created_on": "2021-02-06T06:13:33.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 1 - DAY 2",
            "url": "https://youtu.be/J5VcMkixRuI",
            "thumbnail": 44,
            "live": 0,
            "filename_disk": "6a3dd466-da1a-4e52-af21-1a3c638511e9.png"
        },
        {
            "id": 34,
            "status": "published",
            "sort": 13,
            "owner": 11,
            "created_on": "2021-02-06T06:15:31.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 1 - DAY 3",
            "url": "https://youtu.be/sSoe6RsRHH8",
            "thumbnail": 45,
            "live": 0,
            "filename_disk": "c3579e56-393c-42ac-87d1-51406aa77db9.png"
        },
        {
            "id": 35,
            "status": "published",
            "sort": 12,
            "owner": 11,
            "created_on": "2021-02-06T06:17:07.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 1 - DAY 3",
            "url": "https://youtu.be/g8fu6ioZzdc",
            "thumbnail": 46,
            "live": 0,
            "filename_disk": "7341f798-2ad1-4237-9cf6-bcd012b78e7c.png"
        },
        {
            "id": 36,
            "status": "published",
            "sort": 11,
            "owner": 11,
            "created_on": "2021-02-06T06:20:16.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 1 - DAY 3",
            "url": "https://youtu.be/9O5urOq1Doc",
            "thumbnail": 47,
            "live": 0,
            "filename_disk": "19391b8f-4656-41b1-b047-f28a65fc96bb.png"
        },
        {
            "id": 46,
            "status": "published",
            "sort": 10,
            "owner": 11,
            "created_on": "2021-02-09T07:50:25.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 1 | WEEKLY ROUND-UP",
            "url": "https://youtu.be/RqRomk7pCSc",
            "thumbnail": 57,
            "live": 0,
            "filename_disk": "dfaee0e8-5819-4f7d-96a6-65905b5dd02b.jpg"
        },
        {
            "id": 37,
            "status": "published",
            "sort": 9,
            "owner": 11,
            "created_on": "2021-02-06T06:25:58.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 2 - DAY 1",
            "url": "https://youtu.be/yYKNyLL6X8k",
            "thumbnail": 48,
            "live": 0,
            "filename_disk": "7f5567be-154e-4caf-91b2-c773cf4e8e22.png"
        },
        {
            "id": 38,
            "status": "published",
            "sort": 8,
            "owner": 11,
            "created_on": "2021-02-06T06:27:31.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 2 - DAY 1",
            "url": "https://youtu.be/7Vugu3RagwU",
            "thumbnail": 49,
            "live": 0,
            "filename_disk": "7b074f6f-6956-4e68-9a73-a8cc2de6697a.png"
        },
        {
            "id": 65,
            "status": "published",
            "sort": 8,
            "owner": 11,
            "created_on": "2021-03-15T09:30:40.000Z",
            "name": "CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 2 | WEEKLY ROUND-UP",
            "url": "https://youtu.be/f45HRNrk2kY",
            "thumbnail": 79,
            "live": 0,
            "filename_disk": "c622ab9a-2afd-4420-b4c9-47201bfe74d0.jpg"
        },
        {
            "id": 39,
            "status": "published",
            "sort": 7,
            "owner": 11,
            "created_on": "2021-02-09T07:10:56.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 2 - DAY 1",
            "url": "https://youtu.be/ss_PJ17Yjkw",
            "thumbnail": 50,
            "live": 0,
            "filename_disk": "5f858cb3-8c42-4262-b20e-16777aa7a976.jpg"
        },
        {
            "id": 42,
            "status": "published",
            "sort": 6,
            "owner": 11,
            "created_on": "2021-02-09T07:15:29.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 2 - DAY 2",
            "url": "https://youtu.be/ucSIa0SVG44",
            "thumbnail": 53,
            "live": 0,
            "filename_disk": "83e0c160-9c11-44a2-b22b-62c4404bae5b.jpg"
        },
        {
            "id": 41,
            "status": "published",
            "sort": 5,
            "owner": 11,
            "created_on": "2021-02-09T07:14:50.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 2 - DAY 2",
            "url": "https://youtu.be/sqnQEtRORzM",
            "thumbnail": 52,
            "live": 0,
            "filename_disk": "2711d416-50d7-46d4-a0e6-1a429979f323.jpg"
        },
        {
            "id": 40,
            "status": "published",
            "sort": 4,
            "owner": 11,
            "created_on": "2021-02-09T07:12:29.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 2 - DAY 2",
            "url": "https://youtu.be/8_O4e2c3K2o",
            "thumbnail": 51,
            "live": 0,
            "filename_disk": "1ff9f730-6350-4bae-a5a9-c43667297281.jpg"
        },
        {
            "id": 43,
            "status": "published",
            "sort": 3,
            "owner": 11,
            "created_on": "2021-02-09T07:16:15.000Z",
            "name": "[ENGLISH] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE| WEEK 2 - DAY 3",
            "url": "https://youtu.be/7SF4NH60L7I",
            "thumbnail": 54,
            "live": 0,
            "filename_disk": "742699fe-815a-4bcb-9a2d-2a58f000739f.jpg"
        },
        {
            "id": 44,
            "status": "published",
            "sort": 2,
            "owner": 11,
            "created_on": "2021-02-09T07:18:47.000Z",
            "name": "[HINDI] CONQUEST: FREE FIRE OPEN | LEAGUE STAGE | WEEK 2 - DAY 3",
            "url": "https://youtu.be/wAnoxL5uiGw",
            "thumbnail": 55,
            "live": 0,
            "filename_disk": "a75b858c-4dfb-453a-adfc-d1d2c165e3d3.jpg"
        },
        {
            "id": 45,
            "status": "published",
            "sort": 1,
            "owner": 11,
            "created_on": "2021-02-09T07:46:53.000Z",
            "name": "TOP 10 MOMENTS | CONQUEST: FREE FIRE OPEN | LEAGUE STAGE WEEK 2 - DAY 3",
            "url": "https://youtu.be/CmrcUJq8450",
            "thumbnail": 56,
            "live": 0,
            "filename_disk": "b60d9c73-5bc3-4697-9d7b-b8e4fedfa6ba.jpg"
        }
    ]
	// const client = new RESTClient();
	// client.get('videos').then(res => videos = res);
let toggleFlag = false;
</script>
<div class="top-section videos-section-page">
	<h1 class="title">Videos</h1>
	<div class="video-page-main">
		{#if videos.length}
			<Video video={videos[0]}/>
		{/if}
	</div>
</div>
<!-- TODO -->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-8 col-xs-12 video-slide-container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                    <h4 class="videos-section-title recent-stream-title">Recent Streams</h4>
                </div>
            </div>
            <VideoSlider>
                {#each videos.slice(1, 7) as video}
                <SwiperSlide>
                    <Video {video} classes="video-card"/>
                </SwiperSlide>
                {/each}
            </VideoSlider>
        </div>
    </div>
</div>
<div class="container">
	<div class="videos-section other-videos-demand">
		<div class="row">
			<div class="col-lg-12 col-sm-12 col-xs-12">
				<h4 class="videos-section-title">Other Videos on demand</h4>
			</div>
		</div>
		<div class="row no-gutters">
            {#each !toggleFlag ? videos.slice(1, 5): videos.slice(1) as video}
                <div class="col-lg-6 col-sm-6 col-xs-12 video-container">
                    <Video {video}/>
                </div>
            {/each}
		</div>
        <p on:click|preventDefault="{() => toggleFlag = !toggleFlag}" class="video-seemore">{!toggleFlag ? 'Load More': 'Load Less'}</p>
	</div>
</div>
<Insider />
<!-- <svelte:head>
	<script
		type="module"
		src="https://unpkg.com/svelte-scrollable-card@1.0.2/index.js">
	</script>
</svelte:head> -->

<style>
	.title {
		font-size: 42px;
		margin-bottom: 0;
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
		padding: 80px 0 40px 0;
	}

/*	.top-section {
		height: 593px;
		width: 100% !important;
		background: url("https://send2ali.s3.ap-south-1.amazonaws.com/img-format-banner%402x.png") no-repeat center;
		background-size: 100% 100%;
	}*/

	.videos-section {
		margin: 48px auto;
        max-width: 968px;
	}

	.p-20 {
		padding: 20px 0;
	}

	.h-260 {
		height: 260px;
	}

	.loadmore-btn {
		width: 142px;
		border-radius: 25px;
		margin-bottom: 20px;
	}

	.video-info {
		position: absolute;
		z-index: 9999;
		bottom: 10px;
		left: 0;
		padding: 0 20px;
	}

	.video-info .date-txt {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.5);
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.video-thumbnail img {
		height: 100%;
	}

	.video-page-main .video-thumb {
		width: 620px;
		height: 350px;
	}

	.video-thumbnail {
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		top: 0;
	}

	/* slider */
	.item-container {
		border-radius: 10px;
	}
	
</style>