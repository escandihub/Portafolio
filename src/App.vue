<template>
  <div id="app">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> -->
    <div class="container-sm">
      <Navigator />
    </div>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Content from "@/components/Content";
import Navigator from "@/components/Navigator";
import AboutMe from "@/views/AboutMe";
export default {
  components: {
    Content,
    Navigator,
    AboutMe,
  },
};
</script>
<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: -10;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
