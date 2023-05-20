<template>
  <v-app-bar
    color=""
    density=""
    scroll-behaivor=""
    elevation="1"
    flat=""
    floating=""
    location="top"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon v-if="!_sideNavOpen" icon="mdi-menu" @click="_navLinksStore.openSideNav" />
      <v-app-bar-nav-icon v-else icon="mdi-backburger" @click="_navLinksStore.closeSideNav" />
      <v-app-bar-nav-icon icon="mdi-arrow-left" />
      <v-app-bar-nav-icon icon="mdi-home" />
    </template>

    <v-app-bar-title>{{ _appBarTitle }}</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNavLinksStore } from '../stores/NavLinksStore'

const _navLinksStore = useNavLinksStore()
const { _sideNavOpen, _appBarTitle } = storeToRefs(_navLinksStore)
</script>
