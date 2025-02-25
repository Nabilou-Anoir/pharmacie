<template>
  <v-app>
    <!-- Votre barre de navigation (TopBar) -->
    <TopBar />

    <v-main>
      <v-container>
        <!-- Affichage de la vue active -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TopBar from "./components/Topbar.vue";
</script>

<style scoped>
/* Vos styles */
</style>
