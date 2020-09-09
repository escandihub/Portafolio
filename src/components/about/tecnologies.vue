<template>
  <div class="item-inner">
    <div class="item-icon">
        <img
         v-for="icon in tecnologia.icon" :key="icon"
          class="svg-inline--fa fa-angular fa-w-14 mr-2"
          :src="render(icon)"
          alt=""
          aria-hidden="true"
          style="width: 30px;"
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
  computed: {},
  data: () => {
    return {};
  },
  methods: {
    render(img) {
      return require("../../assets/svs/" + img);
    },
  },
};
</script>

<style></style>
