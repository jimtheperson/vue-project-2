<template>
  <v-app-bar elevation="1" location="top">
    <!-- <template v-slot:image>
      <v-img src="../assets/IMG/boston-image.jpg"></v-img>
    </template> -->
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-if="!_sideNavOpen"
        icon="mdi-menu"
        @click="_navLinksStore.openSideNav"
      />
      <v-app-bar-nav-icon v-else icon="mdi-backburger" @click="_navLinksStore.closeSideNav" />
      <!-- <v-app-bar-nav-icon icon="mdi-arrow-left" /> -->
      <v-app-bar-nav-icon icon="mdi-home" to="/" />
    </template>

    <v-app-bar-title>{{ _appBarTitle }}</v-app-bar-title>

    <VolumeMainGroupComponent />

    <template v-slot:append>
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-dots-vertical" />
        </template>
        <v-list>
          <v-list-item v-for="(menuItem, i) in _menuItems" :key="i">
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNavLinksStore } from '../stores/NavLinksStore'
import VolumeMainGroupComponent from './VolumeMainGroupComponent.vue'
const _navLinksStore = useNavLinksStore()
const { _sideNavOpen, _appBarTitle } = storeToRefs(_navLinksStore)
const _menuItems = ref([{ title: 'Login' }, { title: 'Settings' }])
</script>
