<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  @Action("login") login!: Function;
  created() {
    this.login({ email: "10@qq.com", password: "shining" }).then(
      (res: Ajax.AxiosResponse) => {
        console.log(res, "login");
      }
    );
  }
}
</script>
