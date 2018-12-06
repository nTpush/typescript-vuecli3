<template>
  <div class="alert" v-if="show">
    <div :class="[type, 'alert__container']">
      <span class="alert__container__title">温馨提示：</span>
      <span class="alert__container__text">{{text}}</span>
      <span class="alert__container__close" @click="close">✘</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class Loading extends Vue {
  @Prop() private show: boolean = true;
  @Prop() private text: string = "数据加载中";
  @Prop() private type: string = "info";
  /**
   * 关闭
   */
  close() {
    this.show = false;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/stylus/them';

.alert__container {
  padding: 8px 10px;
  background-color: red;
  position: absolute;
  font-size: 14px;
  border-radius: 2px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.01);
  right: 0;
}

.alert__container span {
  display: block;
}

.alert__container__close {
  margin-left: 20px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: inline-block;
}

.alert__container__text {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info {
  color: info;
  background-color: background__info;
}

.success {
  color: success;
  background-color: background__success;
}

.warning {
  color: warning;
  background-color: background__warning;
}

.error {
  color: error;
  background-color: background__error;
}

.primary {
  color: primary;
  background-color: background__primary;
}
</style>
