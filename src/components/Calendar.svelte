<script>
	import { onMount } from 'svelte';
	import FullCalendar from 'svelte-fullcalendar';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import {RESTClient} from '../utils/rest';
	import moment from 'moment';
	const dates = [{
    "id": 3,
    "status": "published",
    "start": "2020-12-21",
    "end": "2020-12-27",
    "title": "In-game qualifiers",
    "color": "#E91E63"
}, {
    "id": 5,
    "status": "published",
    "start": "2020-12-08",
    "end": "2020-12-21",
    "title": "Registrations",
    "color": "#FFC107"
}, {
    "id": 6,
    "status": "published",
    "start": "2020-12-27",
    "end": "2021-01-04",
    "title": "Seeding",
    "color": "#3F51B5"
}, {
    "id": 7,
    "status": "published",
    "start": "2021-01-13",
    "end": "2021-01-24",
    "title": "Playoffs",
    "color": "#00BCD4"
}, {
    "id": 8,
    "status": "published",
    "start": "2021-01-30",
    "end": "2021-02-26",
    "title": "League Stage",
    "color": "#9C27B0"
}, {
    "id": 9,
    "status": "published",
    "start": "2021-03-12",
    "end": "2021-03-14",
    "title": "Finals",
    "color": "#0b2742"
}]
	//const client = new RESTClient();
	const options = { initialView: 'dayGridMonth', plugins: [dayGridPlugin], events: dates};


	// const options = { initialView: 'dayGridMonth', plugins: [dayGridPlugin], events: (info, success, failure) => {
	// 	client.get('schedules').then(res => {
	// 		success(res.map(s => ({title: s.title, start: moment(s.start).toDate(), end: moment(s.end).toDate(), color: s.color, allDay : true, stick: true})))
	// 	})
	// } };
</script>
<FullCalendar {options} />