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
          class="row col-md-11 mb-4"
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
                  <small class="text-muted" v-html="experiencie.url">
                  </small>
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
              <div class="float-sm-right pb-2 mt-3" >
                <p class="more-link">{{ experiencie.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => {
    return {
      miXP:
        "Mi filosofia principal en el desarrollo es encontrar la manera eficiente de solucionar un problema, disernir de los metodos que exiten para dar alternativas a un problema para poder elegir el que sea eficiente.",
      experiencies: [
        {
          id: 7,
          proyecto: "Basic Push-Notification",
          desc:
            "Para conocer de cerca la interacción de los Services Worker, contruí una pequeña aplicacion para conocer su funcionamiento.",
          url:
            " <a class='link-on-bg' href='https://github.com/escandihub/basic-push-notification' target='_blank'> Repositorio </a>",
          tecn: ["Node.js", "Express"],
          date: "2020 - Feb",
        },
        {
          id: 4,
          proyecto: "Sistema Web Integral",
          desc:
            "En mi residencia profecional desarrolle un Sistema web moderno, para mejoras el proceso que se llevaba acabo de una manera tradicional, facilitando la busqueda de la información y la organizacion.",
          url:
            " <a class='link-on-bg' href='https://fodap.ittg.edu.mx/' target='_blank'> FODAP </a>",
          tecn: ["Laravel", "Vue.JS", "Mysql", "Vuetify"],
          date: "2020 - Ene - 6M",
        },
        {
          id: 5,
          proyecto: "Deteccion de Sospechosos",
          desc:
            "En la participación del Hackaton organizado por la UPCH, mi equipo contruimos una aplicacion para detectar con las camaras un presunto sospechoso para poder dar una alerta a las autoridades.",
          url:
            " <a class='link-on-bg' href='#' target='_blank'> Repositorio </a>",
          tecn: ["Laravel 5.8",],
          date: "2019 - Dec",
        },
        {
          id: 6,
          proyecto: "Expreciones Regulares",
          desc:
            "He desarrolado una mini-aplicacion en Angular, para detectar cuando una expresion que ingrese el usuario ha sido correcta.",
          url:
            " <a class='link-on-bg' href='https://github.com/escandihub/Expeciones-Regulares' target='_blank'> Repositorio </a>",
          tecn: ["Angular", "TypeScrip"],
          date: "2018 - Marzo",
        },
        {
          id: 3,
          proyecto: "Pagina de Aseguradora",
          desc:
            "Se desarrollo una aplicacion donde se presenta informacion acerca de los seguros.",
          url: " <a class='link-on-bg' href='https://github.com/escandihub/Aseguradora' target='_blank'> Repositorio FronEnd </a> </br>  <a class='link-on-bg' href='https://github.com/escandihub/deployHDI' target='_blank'> Repositorio Backend </a>",
          tecn: ["Angular 5", "Node.js" ],
          date: "2018 - Jun",
        },
        {
          id: 2,
          proyecto: "CLI Python",
          desc:
            "En la materias de LENG.Y AUTOM. se desarrollo una aplicacion para facilitar el desarrollo con el micro-Framework Flask, pudiendo crear el proyecto base en el patron MVC.",
          url: " <a class='link-on-bg' href='https://github.com/DarkUnknowKnigth/thunder' target='_blank'> Repositorio </a>",
          tecn: ["Pyhon", "Html"],
          date: "2018 - Dec",
        },
        {
          id: 1,
          proyecto: "Laravel API Auth",
          desc:
            "Con la implementacion de Laravel 5.8, y la libreria de Passport creé una API para autenticar los usuarios y a su vez enviar correos a los usuarios.",
          url:
            " <a class='link-on-bg' href='https://github.com/escandihub/SPA' target='_blank'> Repositorio </a>",
          tecn: ["Laravel 5.8", "Passport"],
          date: "2018 - Dec",
        },
        
      ],
    };
  },
  methods:{},
};
</script>

<style>

.s19 {
  list-style: none;
}
.s19 li:before {
  content: "\f0a9";
  margin-right: 10px;
  font-family: FontAwesome;
}
</style>
