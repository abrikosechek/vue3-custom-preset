<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import LayoutDefault from "@/layouts/default.vue";

export default {
  components: {
    LayoutDefault,
  },
  data() {
    return {
      layout: "LayoutDefault",
    };
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          this.layout = (await `Layout${route.meta.layout}`) || `LayoutDefault`;
        } catch (e) {
          this.layout = "LayoutDefault";
          console.log("Layout error!");
        }
      },
    },
  },
};
</script>

<style lang="scss"></style>
