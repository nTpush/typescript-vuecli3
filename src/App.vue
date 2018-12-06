<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import mLoading from "@/components/loading/index.vue"; // @ is an alias to /src
@Component({
  components: {
    mLoading
  }
})
export default class Loading extends Vue {}
</script>

<style lang="stylus">
@import './assets/stylus/them';
</style>
