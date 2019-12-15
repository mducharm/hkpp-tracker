<template>
  <v-form v-model="valid">
    <v-container>
      <v-subheader>Intake Form</v-subheader>
      <p>Save details of an episode of periodic paralysis using this form.</p>
      <v-row dense>
        <v-col>
          <v-card outlined tile class="pa-2">
            <v-subheader>Severity</v-subheader>
            <v-radio-group v-model="selectedSeverity" :mandatory="true">
              <v-radio label="1 - Mild" :value="1"></v-radio>
              <v-radio label="2" :value="2"></v-radio>
              <v-radio label="3 - Moderate" :value="3"></v-radio>
              <v-radio label="4" :value="4"></v-radio>
              <v-radio label="5 - Severe" :value="5"></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined tile class="pa-2">
            <v-subheader>Triggers</v-subheader>
            <v-chip-group
              multiple
              column
              active-class="primary--text"
              v-model="selectedChipIndexes"
            >
              <v-chip v-for="trigger in triggers" :key="trigger">{{ trigger }}</v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card outlined tile class="pa-2">
            <v-subheader>Duration</v-subheader>
            <v-text-field v-model="duration" type="number" hide-details single-line suffix="Hours"></v-text-field>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined tile class="pa-2">
            <v-subheader>Date</v-subheader>
            <v-date-picker v-model="datePicker"></v-date-picker>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined tile class="pa-2">
            <v-subheader>Notes</v-subheader>
            <v-textarea v-model="notes"></v-textarea>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="submitIntake">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { triggers, Intake } from "@/types";

export default Vue.extend({
  name: "IntakeForm",

  data: () => ({
    valid: false,
    selectedSeverity: 1,
    selectedChipIndexes: [] as number[],
    datePicker: new Date().toISOString().substr(0, 10),
    duration: 0 as number,
    notes: ""
  }),
  computed: {
    triggers() {
      return triggers;
    },
    selectedTriggers() {
      return triggers.filter((trigger, index) =>
        this.selectedChipIndexes.includes(index)
      );
    },
    intakeResults() : Intake {
      return {
        severity: this.$data.selectedSeverity,
        duration: this.$data.duration,
        occuranceDate: this.$data.datePicker,
        triggers: this.selectedTriggers,
        notes: this.$data.notes,
      }
    }
  },
  methods: {
    submitIntake() {
      console.log(this.intakeResults);
      
      return this.$data.intakeResults;
    }
  }
});
</script>
