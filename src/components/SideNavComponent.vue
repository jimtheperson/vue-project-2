<template>
  <v-layout class="drawerContainer">
    <v-navigation-drawer v-model="_sideNavOpen" location="left" temporary>
      <v-list density="compact" nav>
        <v-list-item
          v-for="link in _links"
          :key="link.name"
          :to="{ name: link.name }"
          :prepend-icon="link.icon"
          :title="link.title"
          :value="link.name"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main class="drawerContainer">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useNavLinksStore } from '../stores/NavLinksStore'
import { storeToRefs } from 'pinia'

const _linkStore = useNavLinksStore()
const { _links, _sideNavOpen } = storeToRefs(_linkStore)
</script>

<style>
.drawerContainer {
  height: 100%;
}
</style>
