<template>
  <section class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">Lo que hago</h2>
      <div class="section-intro mb-5">
        Recientemente he desarrollado un sistema para mejorar el proceso de
        administracion en la capacitacion profecional docente en el
        <a class="link-on-bg" href="https://www.tuxtla.tecnm.mx/">
          Instituto Tecnologico de Tuxtla Gutierrez </a
        >, asi como tambien involucrambe en el desarrollo del backend
        aprendiendo nuevas tecnicas para el mejor rendimeinto.
      </div>
      <!--//row-->
      <!-- Componente de las habilidades que tengo -->
      <div class="row">
        <div
          class="item col-6 col-lg-3"
          v-for="tec in tecnologias"
          :key="tec.nombre"
        >
          <tecnologies :tecnologia="tec" />
        </div>
      </div>
    </div>
    <!--//container-->
  </section>
</template>

<script>
import tecnologies from "./tecnologies";
export default {
  components: {
    tecnologies,
  },
  name: "WhatsDo",
  data: () => {
    return {
      persona: {
        done:
          "Recientemente he desarrollado un sistema para mejorar el proceso de administracion en la capacitacion docente en el <a class='link-on-bg' href='https://www.tuxtla.tecnm.mx/'> Instituto Tecnologico de Tuxtla Gutierrez </a>, asi como tambien involucrambe en el desarrollo del backend aprendiendo nuevas tecnicas para el mejor rendimeinto",
      },
      tecnologias: [
        {
          nombre: "Laravel 5.8",
          desc: "He desarrollado una aplicancion de alto impacto con esta tecnologia usando herramientas como Passport, Middleware, Resource, ORM, Web Push Notification y envio de E-mails.",
          icon: "larav.svg",
        },
        {
          nombre: "Vue.js 2",
          desc: "Como tecnologia para la contruccion de WebSite single Page Application, super flexibe y alta capacidad de crecimeinto.",
          icon: "vuejs2.svg",
        },
        {
          nombre: "Node.js",
          desc: "Desarrollo de aplicaciones par diverción",
          icon: "node-js2.svg",
        },
      ],
    };
  },
};
</script>

<style></style>
