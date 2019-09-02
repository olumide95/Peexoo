<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
     <SideBar> </SideBar>
      <router-view/>

      </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
export default {
  name: 'App',
  components: {SideBar },
}
</script>

    
<style>
@import url('./assets/vendor/fontawesome-free/css/all.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
@import url('./assets/css/bootstrap.css');
@import url('./assets/css/style.css');

</style>
