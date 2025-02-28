<template>
    <v-container class="container">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <AjouterMedicament />
          <div>
            <p> Les médicaments ne sont pas des produits ordinaires, ne les prenons pas à la légère </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import AjouterMedicament from "@/components/AjouterMedicament.vue";
  </script>
  
  <style scoped>
  .container {
    position: relative;
    background: url("https://img.freepik.com/vecteurs-libre/illustration-concept-pharmacien_114360-2775.jpg?t=st=1740258363~exp=1740261963~hmac=68e052efdd6dcce5960fb9e3b6d35a2a3a87dbde984366c80ec00be02e4336bb&w=900") no-repeat center center;
    background-size: 50%;
    min-height: 100vh;
    background-position: bottom right;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: rgb(196, 196, 196);
    font-style: italic;
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 10;
  }
  </style>
  