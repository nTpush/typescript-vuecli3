<template>
  <div class="hello">
    <v-btn color="success">Success</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class HelloWorld extends Vue {
  @Action("getTodayWeather") getTodayWeather!: Function;
  @Getter("count") count!: number;
  created() {
    this.getTodayWeather().then((res: Ajax.AjaxResponse) => {
      console.log(res, "res");
    });
    this.getTodayWeather().then((res: Ajax.AjaxResponse) => {
      console.log(res, "res");
    });
    this.getTodayWeather().then((res: Ajax.AjaxResponse) => {
      console.log(res, "res");
    });
    console.log(this.count);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
