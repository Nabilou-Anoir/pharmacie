import { createRouter, createWebHistory } from "vue-router";
import AcceuilView from "@/page/AcceuilView.vue";
import RechercheMedicamentView from "@/page/RechercheMedicamentView.vue";
import AjouterMedicamentView from "@/page/AjouterMedicamentView.vue";
import ListeMedicamentView from "@/page/ListeMedicamentView.vue";

const routes = [
  {
    path: "/",
    name: "AcceuilView",
    component: AcceuilView,
  },
  {
    path: "/recherche",
    name: "RechercheMedicament",
    component: RechercheMedicamentView,
  },
  {
    path: "/ajouter",
    name: "AjouterMedicament",
    component: AjouterMedicamentView,
  },
  {
    path: "/ListeMedicament",
    name: "ListeMedicament",
    component: ListeMedicamentView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
