<template>
  <div class="main-wrapper">
    <section class="about-me-section p-3 p-lg-3 theme-bg-light">
      <div class="container">
        <div class="profile-teaser media flex-column flex-lg-row">
          <div class="media-body">
            <h2 class="name font-weight-bold mb-1">{{ about.me }}</h2>
            <div class="tagline mb-3">{{ about.puesto }}</div>
            <!-- <a class="link-on-bg" href="blog-home.html">my blog</a> -->
            <div class="bio mb-4">{{ about.bio }}</div>
            <!--//bio-->
            <div class="mb-4">
							<!-- <button type="button" class="btn-primary btn btn-lg  mr-2 mb-3">
								<img class="invertir svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" src="../assets/svs/cloud_download-24px.svg" alt="">
								CV
							</button> -->
              <!-- <a class="btn btn-primary mr-2 mb-3" href="portfolio.html"><svg class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg><i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio</a> -->
              <!-- <a class="btn btn-secondary mb-3" href="resume.html"><svg class="svg-inline--fa fa-file-alt fa-w-12 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg><i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume</a> -->
            </div>
          </div>
          <!--//media-body-->
          <img
            class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
            src="../assets/svs/undraw_feeling_proud_qne1.svg"
            alt="perfil"
            width="40%;"
          />
        </div>
      </div>
    </section>
    <WhatsDo />
  </div>
</template>

<script>
import WhatsDo from "@/components/about/WhatsDo";
export default {
  data: () => {
    return {
      about: {
        me: "Alejandro Escandón",
        puesto: "Mid Developer",
        bio:
          "Soy un ingeniero en sistemas computacionales apasionado por el desarrollo de software, internet de las cosas, disfruto contruyendo todo, desde pequeños sitios hasta aplicaciones web interactivas.",
      },
    };
  },
  components: {
    WhatsDo,
  },
};
</script>

<style scoped>
.masEspacioHayError {
  margin-left: 17%;
}
.invertir {
	filter: invert(100%) ;
}
</style>
