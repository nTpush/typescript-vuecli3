<template>
  <div class="alert">
    <transition name="slide-fade">
      <div :class="[type, 'alert__container']" v-if="show">
        <span class="alert__container__title">温馨提示：</span>
        <span class="alert__container__text">{{text}}</span>
        <span class="alert__container__close" @click="close">✘</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
let themVue: any = Vue;

@Component
export default class Loading extends Vue {
  @Prop() private show: boolean = true;
  @Prop() private text: string = "数据加载中";
  @Prop() private type: string = "info";
  /**
   * 关闭
   */
  close() {
    themVue.$alert.hide();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/stylus/them';

.alert {
  position: absolute;
  right: 0;
  overflow: hidden;
}

.alert__container {
  padding: 8px 10px;
  background-color: red;
  font-size: 14px;
  border-radius: 2px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.01);
  right: 0;
  margin-bottom: 10px;
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
