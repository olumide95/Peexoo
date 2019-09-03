<template>
   <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion list-hover-slide" :class="{toggled : toggled }" id="accordionSidebar">
            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-text mx-3">
                    <img src="../assets/img/Asset 7.png" class="dashboard-logo" />
                </div>
            </a>
            <div class="mb-5"></div>
            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-user"></i>
                    <span>Profile</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-cube"></i>
                    <span>Pricing Package</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link selected" href="#">
                    <i class="fas fa-fw fa-calendar"></i>
                    <span>Availability</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-camera"></i>
                    <span>Bookings</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-briefcase"></i>
                    <span>Portfolio</span></a>
            </li>

            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-images"></i>
                    <span>Albums</span></a>
            </li>
            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-shopping-bag"></i>
                    <span>Subscriptions</span></a>
            </li>
            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-credit-card"></i>
                    <span>Payments</span></a>
            </li>
            <div class="mb-4"></div>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Settings</span></a>
            </li>

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline" style="color: #FFFFFF;position: absolute; bottom: 0; padding: 35px 4%;font-size:12px">
                <span>© 2019 Peexo Technol </span>
            </div>
        </ul>
        <!-- End of Sidebar -->
</template>

<script>

export default {
  name: 'SideBar',
  
  components: { },
  data() {
      return {
          toggled:false
      }
  },
  mounted() {
      let self = this;
         this.$event.$on("toggleSidebar", function(payLoad) {
            self.toggled = !self.toggled
             
        });
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
        *,
         :before,
         :after {
            box-sizing: border-box;
        }
        
        .list-hover-slide li {
            position: relative;
            overflow: hidden;
        }
        
        .list-hover-slide a.nav-link {
            display: block;
            position: relative;
            z-index: 1;
            transition: 0.35s ease color;
        }
        
        .list-hover-slide a.nav-link:before {
            content: "";
            display: block;
            z-index: -1;
            position: absolute;
            right: -200%;
            top: 0;
            width: 100%;
            height: 100%;
            border-left: solid 5px #ffb603;
            background: #5c5c5c;
            transition: 0.35s ease right;
        }
        
        .list-hover-slide a.is-current:before,
        .list-hover-slide a.nav-link:hover:before {
            right: 0;
        }
        .list-hover-slide a.nav-link.selected:before, .list-hover-slide a.nav-link.selected, .list-hover-slide a.nav-link.selected > i{
             right: 0;
             color: #f6c23e !important;
        }
        
        .calender-toggle {
            color: #b58000;
            font-weight: 400;
            font-size: 14px;
        }
        
        .btn-schedule {
            color: white;
            font-weight: 500;
            font-size: 14px;
            background-color: #ffb603;
            border-color: #ffb603;
        }

        .btn-schedule:hover {
            color: white !important;
            
        }
    </style>
