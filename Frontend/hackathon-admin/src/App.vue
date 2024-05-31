<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    AppHeader
  }
};
</script>

