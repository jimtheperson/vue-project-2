<template>
  <div class="contentWrapper">
    <img src="../assets/IMG/RafflesG.png" />
    <v-expand-x-transition>
      <div v-if="_linksExpand" class="linksWrapper">
        <v-btn
          v-for="link in _filteredLinks"
          :key="link.name"
          variant="text"
          stacked
          size="x-large"
          :to="link.name"
          :prepend-icon="link.icon"
        >
          <v-text class="linkTitle">{{ link.title }}</v-text>
        </v-btn>
      </div>
    </v-expand-x-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useNavLinksStore } from '../stores/NavLinksStore'

const _linkStore = useNavLinksStore()
const { _filteredLinks } = storeToRefs(_linkStore)
const _linksExpand = ref(false)

onMounted(() => {
  setTimeout(() => {
    _linksExpand.value = true
  }, 100)
})
</script>

<style>
.linksWrapper {
  margin: 20px;
  padding: 10px;
  border-top: 1px solid black;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  flex-flow: row nowrap;
}
.linkTitle {
  margin-top: 10px;
}
</style>
