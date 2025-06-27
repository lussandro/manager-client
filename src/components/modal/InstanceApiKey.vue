<template>
  <v-dialog v-model="dialog" max-width="500px" :persistent="!AppStore.validConnection">
    <v-card>
      <v-card-text>
        <v-form v-model="valid">
          <h3 class="mb-4">Configurar conexão</h3>

          <!-- ✅ NOVO CAMPO ADICIONADO -->
          <v-text-field
            v-model="connection.host"
            label="URL"
            required
            outlined
            hide-details
            :rules="[v => !!v || 'URL obrigatória']"
          />

          <!-- CAMPO DA CHAVE DE API -->
          <v-text-field
            v-model="connection.globalApiKey"
            label="token"
            required
            outlined
            :type="revelPassword ? 'text' : 'password'"
            :append-inner-icon="revelPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="revelPassword = !revelPassword"
          />
        </v-form>

        <v-alert type="error" v-if="error">
          {{ Array.isArray(error) ? error.join(", ") : error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text to="/" :disabled="loading">Cancel</v-btn>
        <v-btn
          color="success"
          variant="tonal"
          @click="save"
          :disabled="!valid"
          :loading="loading"
        >
          Conectar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useAppStore } from "@/store/app";

export default {
  name: "SettingsModal",
  data: () => ({
    dialog: false,
    valid: false,
    revelPassword: false,
    loading: false,
    error: false,
    AppStore: useAppStore(),

    // ✅ VALOR INICIAL VINDO DO ENV
    connection: {
      host: import.meta.env.VITE_API_URL || "http://localhost:3001",
      globalApiKey: "",
    },
  }),
  methods: {
    async save() {
      try {
        this.loading = true;
        this.error = false;

        await this.AppStore.setConnection(this.connection);
        this.dialog = false;
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
    open() {
      this.dialog = true;
    },
  },

  emits: ["close"],
};
</script>
