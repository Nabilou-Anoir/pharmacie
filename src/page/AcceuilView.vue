<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1>
          <span
            v-for="(lettre, index) in lettres"
            :key="index"
            class="lettre"
            :style="{ animationDelay: (index * 0.1) + 's' }"
          >
            {{ lettre }}
          </span>
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const texte = "BIENVENUE DANS VOTRE PHARMACIE";
const lettres = texte.split("");
</script>

<style scoped>

.container {
  background: url("https://img.freepik.com/vecteurs-libre/illustration-concept-pharmacien_114360-2901.jpg?t=st=1740245050~exp=1740248650~hmac=14bac21f7bcc650baf98f35ee821c3d2288cf91ba9785cdd2ab64f31edaafa7a&w=1380") no-repeat center center;
  background-size: 80%;
  min-height: 100vh;
}

h1 {
  font-weight: 100%;
  font-size: 50px;
  text-align: center;
  font-family: "Arial Black";
  color: green;
}

/* Animation d'apparition lettre par lettre */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lettre {
  display: inline-block;
  opacity: 0;
  animation: fadeInUp 1s forwards;
  white-space: pre;
}
</style>
