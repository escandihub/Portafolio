<template>
<section class="header text-center navigator">
  <div class="force-overflow">
    <h1 class="blog-name pt-lg-4 mb-0">Alejandro Escandon</h1>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark">
				
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div id="navigation" class="navbar-collapse flex-column collapse" style="">
					<div class="profile-section pt-3 pt-lg-0">
						<img class="profile-image mb-3 rounded-circle mx-auto" src="../assets/me.jpg" alt="image">			
	
						<div class="bio mb-3"> {{ about}} </div><!--//bio-->

						<ul class="social-list list-inline py-2 mx-auto">
               <li  class="list-inline-item">
                 <a class="navbar-brand" @click="goPage('https://github.com/escandihub/')" href="#">
                   <img src="../assets/svs/github.svg"  class="d-inline-block align-top"  width="25" height="23" alt="imagen">
                  </a>
                 
               </li>
						</ul><!--//social-list-->
						<hr> 
					</div><!--//profile-section-->
          <ul class="navbar-nav flex-column text-left" id="rutas">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Acerca de mi</router-link>
            </li>
            <li class="nav-item">
              <router-link to="experiences" class="nav-link" >Experiencias</router-link>
            </li>
            <li class="nav-item">
						</li>
          </ul>
				</div>
			</nav>
</section>
</template>

<script>
export default {
  name:'Navigator',
  data: () => {
    return {
      about2: '¡Hola!, Mi nombre es Alejandro Escandon y soy un Desarrollador Web senior, resien egresado con grandes habilidades en el desarrollo de software',
      about: '¡Hola!, Mi nombre es Alejandro Escandon recien egresado de Ingenieria en Sistemas Computacionales, con mucho entusiasmo del aprendizaje, innovar es mi pasión.'
    }
  },
  methods: {
    goPage(link){
      window.open(link, "_blank")
    }
  }

}
</script>

<style>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.icon-github {
  width: 0.857421875em;
}
#rutas a.router-link-exact-active {
  color: rgba(0,0,0,0.5);
}


</style>