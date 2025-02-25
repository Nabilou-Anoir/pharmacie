<script setup>
import { ref, reactive } from 'vue'
import { Medicament } from '../Medicament.js'
 
const texte = ref('')
const listeMedicaments = reactive([])
const url = "https://apipharmacie.pecatte.fr/api/1/medicaments?search="


function getMedicaments() {
  const fetchOptions = { method: "GET" }
  fetch(url + encodeURIComponent(texte.value), fetchOptions)
    .then(response => response.json())
    .then(dataJSON => {
      console.log(dataJSON)
      listeMedicaments.splice(0, listeMedicaments.length)
      dataJSON.forEach(v => {
        listeMedicaments.push(new Medicament(v.id, v.qte, v.denomination, v.formepharmaceutique, v.photo))
      })
    })
    .catch(error => console.log(error))
}


function rechercher() {
  getMedicaments()
}
</script>

<template>
  <div>
    <h2>Chercher un médicament</h2>
    <form @submit.prevent="rechercher">
      <input v-model="texte" type="text" placeholder="Critère de recherche" />
      <button type="submit">Rechercher</button>
    </form>
    <div class="medicaments-container">
      <div v-if="listeMedicaments.length">
        <ul>
          <li v-for="med in listeMedicaments" :key="med.id" class="med-item">
            {{ med.denomination }} - Quantité : {{ med.qte }}
          </li>
        </ul>
      </div>
      <div v-else>
        Aucun médicament trouvé.
      </div>
    </div>
  </div>
</template>

<style scoped>


.medicaments-container {
  margin-top: 20px;
}
form {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}
button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
ul {
  list-style: none;
  padding: 0;
}
.med-item {
  margin: 5px 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
</style>
