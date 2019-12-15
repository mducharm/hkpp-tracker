<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-calendar-text</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <intake-form></intake-form>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import IntakeForm from "./components/IntakeForm.vue";

export default Vue.extend({
  name: "App",

  components: {
    IntakeForm
  },

  data: () => ({
    //
  })
});
</script>
