<template>
  <div class="item-inner">
    <div class="item-icon">
      <img
        class="svg-inline--fa fa-js-square fa-w-14"
        :src="imagen"
        alt=""
        aria-hidden="true"
        style="width: 40px;"
      />
    </div>
    <h3 class="item-title">{{ tecnologia.nombre }}</h3>
    <div class="item-desc">
      {{ tecnologia.desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tecnologia: Object,
  },
  computed: {
    imagen() {
      return require("../../assets/svs/" + this.tecnologia.icon);
    },
  },
  data: () => {
    return {};
  },
};
</script>

<style></style>
