<template>
  <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
               <TopBar></TopBar>

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Availability</h1>
            </div>

            <!-- Content Row -->
            <div class="row">
              <div class="col-md-4 ">
                <span class="mr-2 calender-toggle" @click="calenderView">
                  <i class="fas fa-calendar fa-sm fa-fw mr-2 "></i>
                  Calender View
                </span>

                  <span class="mr-2 calender-toggle" @click="listView">
                  <i class="fas fa-list fa-sm fa-fw mr-2"></i>
                  List View
                </span>
            </div>

            <div class="col-md-8">
                <div class="">
                    <!-- Search -->
                    <form class="d-sm-inline-block form-inline " style="width:77%">
                        <div class="input-group">
                            <input class="form-control py-2 border-right-0 border "  type="search" value="search" id="example-search-input" />
                            <span class="input-group-append">
                        <div class="input-group-text bg-white">
                          <i class="fa fa-search"></i>
                        </div>
                      </span>
                        </div>
                    </form>

                    <button href="#" class="btn btn-schedule btn-md float-right" @click="addSchedule">
                        <span class="icon">
                      <i class="fas fa-plus"></i>
                    </span>
                        <span class="text">Add schedule</span>
                    </button>
                </div>
            </div>
        </div>
  
         <div class="row">
            <div class="col-md-12">
             <Calendar></Calendar>
            </div>
       </div>
    </div>
    <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->
</template>

<script>
import TopBar from "@/components/TopBar"
import Calendar from "@/components/Calendar"

export default {
  name: 'Dashboard',
  components: {Calendar,TopBar },

  data () {
    return {
     
    }
  },
  methods: {
    addSchedule(){

      this.$event.$emit("addSchedule");
    },
    listView(){

      this.$event.$emit("listView");
    },
    calenderView(){

      this.$event.$emit("calenderView");
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calender-toggle{
  cursor:pointer
}

.bg-white{

    background-color: #fff !important;


}

@media only screen and (max-width: 414px) {
    .btn.btn-schedule{
           float: left !important;
           margin-top:2%
   }
}
</style>
