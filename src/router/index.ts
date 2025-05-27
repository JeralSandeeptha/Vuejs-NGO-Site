import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home-page/HomePage.vue";
import AboutPage from "../pages/about-page/AboutPage.vue";
import WhatWeDoPage from "../pages/what-we-do-page/WhatWeDoPage.vue";
import ContactPage from "../pages/contact-page/ContactPage.vue";
import DonationPage from "../pages/donation-page/DonationPage.vue";
import EventPage from "../pages/event-page/EventPage.vue";
import MediaPage from "../pages/media-page/MediaPage.vue";
import ProjectPage from "../pages/project-page/ProjectPage.vue";
// We want to include vue-shims.d.ts file to export default all the components

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/about', name: 'About', component: AboutPage },
        { path: '/contact', name: 'Contact', component: ContactPage },
        { path: '/donate', name: 'Donation', component: DonationPage },
        { path: '/event', name: 'Event', component: EventPage },
        { path: '/media', name: 'Media', component: MediaPage },
        { path: '/project', name:'Project', component: ProjectPage },
        { path: '/what-we-do', name: 'What We Do', component: WhatWeDoPage },
    ]
});

export default router;