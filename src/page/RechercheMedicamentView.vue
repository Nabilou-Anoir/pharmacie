<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Trouvez tous les médicaments qu'il vous faut... enfin, presque.</h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <RechercheMedicament />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import RechercheMedicament from "@/components/RechercheMedicament.vue";
</script>

<style scoped>
h2 {
  font-weight: 50%;
  font-size: 30px;
  text-align: center;
  font-family: "Arial";
  color: rgb(196, 196, 196);
  font-style: italic;
}
.container {
  background: url("https://www.opq.org/wp-content/uploads/2021/01/Capture02.png") no-repeat center center;
  background-size: 50%;
  min-height: 100vh;
  background-position: bottom right;
}
</style>
