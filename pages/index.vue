<script setup lang="ts">

const components = [
  { name: 'Home', component: resolveComponent('MarketingHome') },
  { name: 'Legal-intelligence', component: resolveComponent('MarketingLegalIntelligence') },
  { name: 'ComponentGuide', component: resolveComponent('MarketingComponentGuide') },
]

const languages = [
  'en',
  'fr',
]

const page = ref('Home')

const language = ref('en')

const templateComponent = computed(() => components.find(component => component.name === page.value)?.component)
</script>

<template>
  <div>
    <div class="topbar">
      <div>
        <label for="page" class="title" >Page:</label>

        <select name="page" id="page" v-model="page">
          <option v-for="component in components" :value="component.name">{{ component.name }}</option>
        </select>
      </div>
      <div>
        <label for="language" class="title" >Language:</label>

        <select name="language" id="language" v-model="language">
          <option v-for="language in languages" :value="language">{{ language }}</option>
        </select>
      </div>
  </div>
  <component :is="templateComponent" :key="language" :language="language" />
</div>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  background-color: black;
  border-bottom: 1px solid white;
}

.title {
  font-weight: bold;
}
</style>
