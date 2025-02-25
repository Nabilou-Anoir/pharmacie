import { createApp } from "vue";
import App from "./App.vue";

// Import du routeur (assurez-vous que ce fichier est bien en TypeScript)
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Création de l’instance Vuetify
const vuetify = createVuetify({
  components,
  directives,
});

// Création et montage de l'app Vue
createApp(App).use(router).use(vuetify).mount("#app");
