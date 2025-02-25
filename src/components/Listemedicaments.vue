<template>
  <div>
    <h1> Ouvrir la liste des médicaments </h1>
    <button @click="Liste" class="liste">Médicaments</button>

    <ul v-if="afficherListe">
      <li v-for="med in ListeMedicaments" :key="med.id">
        <p class="bouton">
          La dénomination est : {{ med.denomination }} - Quantité : {{ med.qte }}
          <button @click="supprimerMedicament(med.id)">Supprimer</button>
          <button @click="ajouter1(med)">+1</button>
          <button @click="retirer1(med.id)">-1</button>
          <button @click="modifier(med)">Modifier</button>
        </p>
        <img
          :src="'https://apipharmacie.pecatte.fr/images/' + med.photo"
          alt="Photo médicament"
          width="170"
          class="photo"
        />
      </li>
    </ul>
  </div>
     
  <!-- Fenêtre de modification -->
  <div v-if="medicamentsEnModification" class="fenetre">
    <div class="fenetre2">
      <h2>Modification</h2>
      <form @submit.prevent="mettreAJourMedicament">
        <input
          v-model="medicamentsEnModification.denomination"
          type="text"
          placeholder="Nom du médicament"
          required
          class="modif-input"
        />
        <input
          v-model="medicamentsEnModification.formepharmaceutique"
          type="text"
          placeholder="Forme pharmaceutique"
          required
          class="modif-input"
        />
        <input
          v-model.number="medicamentsEnModification.qte"
          type="number"
          placeholder="Quantité"
          required
          class="modif-input"
        />
        <input type="file" @change="telechargementFenetre" class="modif-input-file" />
        <div class="actions">
          <button type="submit">Sauvegarder</button>
          <button type="button" @click="annulerfenetre">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Medicament } from "../Medicament.js";

// Initialisation à null pour contenir un médicament en modification
const medicamentsEnModification = ref(null);
const ListeMedicaments = reactive([]);
const afficherListe = ref(false);

/**
 * Fonction qui affiche ou masque la liste des médicaments.
 */
function Liste() {
  if (!afficherListe.value) {
    getMedicament();
    afficherListe.value = true;
  } else {
    afficherListe.value = false;
  }
}

/**
 * Fonction qui affiche la liste des médicaments.
 */
function getMedicament() {
  const url = "https://apipharmacie.pecatte.fr/api/1/medicaments";
  console.log(url);
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      ListeMedicaments.splice(0, ListeMedicaments.length);
      dataJSON.forEach((v) =>
        ListeMedicaments.push(new Medicament(v.id, v.qte, v.denomination, v.formepharmaceutique, v.photo))
      );
    })
    .catch((error) => console.log(error));
}

/**
 * Fonction qui supprime un médicament en utilisant son id.
 */
function supprimerMedicament(id) {
  const url = `https://apipharmacie.pecatte.fr/api/1/medicaments/${id}`; 
  const fetchOptions = { method: "DELETE" };
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      getMedicament();
    })
    .catch((error) => console.log(error));
}

/**
 * Fonction qui augmente la quantité du médicament.
 */
function ajouter1(med) {
  med.qte++;
  const url = "https://apipharmacie.pecatte.fr/api/1/medicaments";
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: med.id,
      denomination: med.denomination,
      formepharmaceutique: med.formepharmaceutique,
      qte: med.qte,
      photo: med.photo,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      getMedicament();
    })
    .catch((error) => console.log(error));
}

/**
 * Fonction qui diminue la quantité du médicament.
 */
function retirer1(id) {
  const med = ListeMedicaments.find(m => m.id === id);
  med.qte = med.qte > 0 ? med.qte - 1 : 0;
  const url = "https://apipharmacie.pecatte.fr/api/1/medicaments";
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: med.id,
      denomination: med.denomination,
      formepharmaceutique: med.formepharmaceutique,
      qte: med.qte,
      photo: med.photo,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      getMedicament();
    })
    .catch((error) => console.log(error));
}

/**
 * Fonction qui initialise la modification d'un médicament en créant une copie.
 */
function modifier(med) {
  medicamentsEnModification.value = { ...med };
}

/**
 * Fonction qui réinitialise la fenêtre de modification.
 */
function annulerfenetre() {
  medicamentsEnModification.value = null;
}

/**
 * Fonction qui télécharge la nouvelle photo, cf fiche API.
 */
function telechargementFenetre(event) {
  const fichier = event.target.files[0];
  if (!fichier) return;
  const lecteur = new FileReader();
  lecteur.onload = () => {
    medicamentsEnModification.value.photo = lecteur.result;
  };
  lecteur.readAsDataURL(fichier);
}

/**
 * Fonction qui met à jour un médicament en effectuant une requête PUT.
 */
function mettreAJourMedicament() {
  const url = "https://apipharmacie.pecatte.fr/api/1/medicaments";
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medicamentsEnModification.value),
  };
  fetch(url, fetchOptions)
    .then((reponse) => reponse.json())
    .then(() => {
      getMedicament();
      medicamentsEnModification.value = null;
    })
    .catch((erreur) => console.log(erreur));
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-left: 0;
  padding-left: 10px;
}
button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 1px;
}
button:hover {
  background-color: #449448FF;
}
img {
  display: block;
  margin-top: 5px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.fenetre {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(199, 230, 238, 0.774);
  display: flex;
  justify-content: center;
  align-items: center;
}
.fenetre2 {
  background-color: #1462d6;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
}
.actions {
  display: flex;
  justify-content: space-between;
  margin: 5%;
}
.photo {
  display: block;
  margin: 0 auto;
}
li {
  list-style-type: none;
  margin: 60px;
  font-family: "Arial", sans-serif;
  font-size: 22px;
  font-style: italic;
  color: blue;
}
.bouton {
  margin: 60px;
}
h1 {
  color: rgb(0, 100, 0);
}
.liste {
  font-size: 25px;
}
.modif-input {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;  
  border: 1px solid #000;     
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
