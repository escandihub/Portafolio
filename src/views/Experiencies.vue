<template>
  <div class="main-wrapper">
    <div class="cta-section theme-bg-light py-5">
      <div class="container text-center single-col-max-width">
        <h3 class="heading">Experiencias</h3>
        <div class="intro">
          <p v-html="miXP"></p>
        </div>
      </div>
    </div>
    <div class="p-md-5">
      <div class="container">
        <div
          class="row col-md-12 mb-4"
          v-for="experiencie in experiencies"
          :key="experiencie.id"
        >
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-7">
                <div class="card-body">
                  <div class="card-title">
                    <h5>{{ experiencie.proyecto }}</h5>
                  </div>
                  <div class="card-text">
                    {{ experiencie.desc }}
                  </div>
                </div>
                <p class="card-text pb-2 ml-3">
                  <small class="text-muted" v-html="experiencie.url"> </small>
                </p>
              </div>
              <div class="col-lg-3">
                <div class="card-text mt-2">
                  <p class="text-muted text-center">Tecnologías</p>
                </div>
                <ul class="s19" v-for="tec in experiencie.tecn" :key="tec">
                  <li class="text-muted">{{ tec }}</li>
                </ul>
              </div>
              <div class="float-sm-right pb-2 mt-3">
                <p class="more-link fechas">{{ experiencie.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { exp } from "@/utils/experiencias";
export default {
  props: {},
  data: () => {
    return {
      miXP:
        "Mi filosofia principal en el desarrollo es encontrar la manera eficiente de solucionar un problema, disernir de los metodos que exiten para dar alternativas a un problema para poder elegir el que sea eficiente.",
      experiencies: exp()
    };
  },
  methods: {},
};
</script>

<style>
.fechas {
  margin-left: 0px;
}
.s19 {
  list-style: none;
}
.s19 li:before {
  content: "\f0a9";
  margin-right: 10px;
  font-family: FontAwesome;
}

@media screen and (max-width: 992px) {
  .fechas {
    margin-left: 15px;
  }
}
</style>
