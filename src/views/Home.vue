<template>
  <div class="home">
    <Navigator />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navigator from '@/components/Navigator.vue'


export default {
  name: 'Home',
  components: {
    Navigator,
  }
}
</script>
