<template>
  <v-card class="drawerContainer">
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list density="compact">
          <v-list-item prepend-icon="mdi-menu" title="Menu" nav>
            <template v-slot:append>
              <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            v-for="view in views"
            :key="view.name"
            :to="{ name: view.name }"
            :prepend-icon="view.icon"
            :title="view.title"
            :value="view.name"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useViewStore } from '../stores/ViewStore'
import { storeToRefs } from 'pinia'
const drawer = ref(true)
const viewStore = useViewStore()
const { views } = storeToRefs(viewStore)
const rail = ref(true)
</script>
