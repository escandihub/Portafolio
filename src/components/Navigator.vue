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
						<img class="profile-image mb-3 rounded-circle mx-auto" src="https://images-na.ssl-images-amazon.com/images/I/41g6jROgo0L.png" alt="image">			
	
						<div class="bio mb-3"> {{ about}} </div><!--//bio-->

						<ul class="social-list list-inline py-2 mx-auto">
               <li  class="list-inline-item">
                 <a class="navbar-brand" href="https://github.com/escandihub">
                   <img src="../assets/svs/github.svg"  class="d-inline-block align-top"  width="25" height="23" alt="imagen">
                  </a>
                 
               </li>
						</ul><!--//social-list-->
						<hr> 
					</div><!--//profile-section-->
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
      about: '¡Hola!, Mi nombre es Alejandro Escandon y soy un Desarrollador Web senior, Bienvenido a mi portafolio'
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
</style>