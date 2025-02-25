<template>
  <div>
    <h2>Ajouter un médicament</h2>
    <form @submit.prevent="ajouterMedicament">
      <input
        v-model="nouveauMedicament.denomination"
        type="text"
        placeholder="Nom du médicament"
        required
      />
      <input
        v-model="nouveauMedicament.formepharmaceutique"
        type="text"
        placeholder="Forme pharmaceutique"
        required
      />
      <input
        v-model="nouveauMedicament.qte"
        type="number"
        placeholder="Quantité"
        required
        min="1"
      />
      <input type="file" @change="handleFileUpload" />

      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Listemedicaments from "./Listemedicaments.vue";

//création d'un objet réactif qui stocke les informations
//d'un nouveau médicament

const nouveauMedicament = reactive({
  denomination: "",
  formepharmaceutique: "",
  qte: 1,
  photo: null,
});

//Envoi des photos Cf fiche API
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    nouveauMedicament.photo = reader.result;
  };
  reader.readAsDataURL(file);
};

//fonction qui ajoute mon medicament
function ajouterMedicament () {
  const url = "https://apipharmacie.pecatte.fr/api/1/medicaments";
  let fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nouveauMedicament)
  };

  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => {
      console.log(error);
    });
};

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin-top: 10px;
}

input,
button {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
