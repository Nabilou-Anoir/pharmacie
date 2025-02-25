<template>
  <v-container class="center-container">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <ListeMedicaments />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ListeMedicaments from "@/components/Listemedicaments.vue";
</script>

<style scoped>
.center-container { 
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: url("https://img.freepik.com/photos-gratuite/disposition-objets-medicaux-cadre-vide_23-2148502962.jpg?t=st=1740335587~exp=1740339187~hmac=2796ba56d3c05c4dc8047166c2065367da9d0ef9403250dc983876d475f28dc2&w=2000") no-repeat center center;
  background-size: cover;
}
</style>
