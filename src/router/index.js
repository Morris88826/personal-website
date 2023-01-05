import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import Experience from "../views/Experience.vue"
import Education from "../views/Education.vue";
import Honors from "../views/Honors.vue";
import Others from "../views/Others.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: Layout },
  },
  {
    path: "/projects",
    name: "projects",
    component: Project,
    meta: { layout: Layout },
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
    meta: { layout: Layout },
  },
  {
    path: "/education",
    name: "education",
    component: Education,
    meta: { layout: Layout },
  },
  {
    path: "/honors",
    name: "honors",
    component: Honors,
    meta: { layout: Layout },
  },
  {
    path: "/others",
    name: "others",
    component: Others,
    meta: { layout: Layout },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
