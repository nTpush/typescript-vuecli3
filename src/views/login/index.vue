<template>
  <div class="login"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
@Component({
  components: {}
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
