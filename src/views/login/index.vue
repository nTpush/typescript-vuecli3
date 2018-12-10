<template>
  <div class="login">
    <button @click="test">信息</button>
    <button @click="error">错误</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
let themVue: any = Vue;
@Component({
  components: {}
})
export default class Home extends Vue {
  @Action("login") login!: Function;

  test() {
    themVue.$alert.show("info");
  }
  error() {
    themVue.$alert.error("这是一条错误信息");
  }

  created() {
    this.login({ email: "10@qq.com", password: "shining" }).then(
      (res: Ajax.AxiosResponse) => {
        console.log(res, "login");
      }
    );
  }
}
</script>
