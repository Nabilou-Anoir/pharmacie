<template>
    <v-container class="container">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <AjouterMedicament />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import AjouterMedicament from "@/components/AjouterMedicament.vue";
  </script>
  
  <style scoped>
.container {
  background: url("https://img.freepik.com/vecteurs-libre/illustration-concept-pharmacien_114360-2775.jpg?t=st=1740258363~exp=1740261963~hmac=68e052efdd6dcce5960fb9e3b6d35a2a3a87dbde984366c80ec00be02e4336bb&w=900") no-repeat center center;
  background-size: 50%;
  min-height: 100vh;
  background-position: bottom right;
}
  </style>
  