 <template>
  <v-app>
    <TopBar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TopBar from "./components/Topbar.vue";
</script>

<style scoped>
</style>