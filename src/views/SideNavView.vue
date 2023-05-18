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
            v-for="link in links"
            :key="link.name"
            :to="{ name: link.name }"
            :prepend-icon="link.icon"
            :title="link.title"
            :value="link.name"
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
import { useNavLinksStore } from '../stores/NavLinksStore'
import { storeToRefs } from 'pinia'
const drawer = ref(true)
const linkStore = useNavLinksStore()
const { links } = storeToRefs(linkStore)
const rail = ref(true)
</script>

<style>
.drawerContainer{
  height: 100vh;
}
</style>
