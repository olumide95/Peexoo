<template>

<div class="calender-section">
 <div class="mb-2 my-4 controls">
 <div class="row">
<div class="col-md-12">
        <i class="fas fa-chevron-left" @click="getPrev"></i>
         <i class="fas fa-chevron-right mr-2" @click="getNext"></i>
            <span class="mr-2" style="color:black">{{summary}}</span>
         <button type="button" class="btn btn-sm btn-outline-warning" style="padding-left:2%;padding-right:2%" @click="setToday">Today</button>
   </div>
</div>
 </div>
<v-app id="dayspan" v-cloak>
    <ds-calendar-app ref="app" :calendar="calendar" :events="defaultEvents">

     <template slot="calendarAppAdd" v-show="false">
       <div></div>
      </template>
    </ds-calendar-app>
  </v-app>
</div>
   
</template>

<script>
import { Calendar, Weekday, Month  } from 'dayspan';
import Vue from 'vue';
export default {
  name: 'Calendar',
  
  components: { },
  data () {
    return {
        summary:'',
       calendar: Calendar.months(),
       defaultEvents: [
      {
       data: {
          title: "Mrs. Steven duaghtes's photography",
          color: '#2196F3',
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfMonth: [2]
        }
      
    },
     {
       data: {
          title: "Mrs. Peter duaghtes's photography",
          color: '#2196F3',
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfMonth: [11]
        }
      
    },
    {
       data: {
          title: "Mrs. Peter duaghtes's photography",
          color: '#2196F3',
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfMonth: [12]
        }
      
    },
    {
       data: {
          title: "Mrs. Peter duaghtes's photography",
          color: '#2196F3',
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfMonth: [13]
        }
      
    },
    {
       data: {
          title: "Mrs. Steven duaghtes's photography",
          color: '#2196F3',
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfMonth: [27]
        }
      
    }
    ]
    
  }
},
  mounted()
  {
    
    let self = this;
    this.$event.$on("addSchedule", function(payLoad) {
        self.$refs.app.addToday();
        console.log(self.$refs.app)
    

    });

    this.$event.$on("calenderView", function(payLoad) {
        self.$refs.app.currentType = self.$refs.app.types[2];
        self.setToday();

    });

    this.$event.$on("listView", function(payLoad) {
      self.$refs.app.currentType = self.$refs.app.types[4];
      self.setToday();


    });


    window.app = this.$refs.app;
    this.setSummary();
    this.loadState();
    
  },

methods: {

    getPrev(){
        this.$refs.app.prev();
        this.setSummary();
    },
    getNext(){
        this.$refs.app.next();
        this.setSummary();
    },
    setToday(){
        this.$refs.app.setToday();
        this.setSummary();
    },
    setSummary(){
        this.summary = this.$refs.app.summary;
    },
    loadState()
    {
      
      let state = {};
      try
      {
        let savedState = JSON.parse(localStorage.getItem(this.storeKey));
        if (savedState)
        {
          state = savedState;
          state.preferToday = false;
        }
      }
      catch (e)
      {
        // eslint-disable-next-line
        console.log( e );
      }
      if (!state.events || !state.events.length)
      {
        state.events = this.defaultEvents;
      }
      state.events.forEach(ev =>
      {
        let defaults = this.$dayspan.getDefaultEventDetails();
        ev.data = Vue.util.extend( defaults, ev.data );
      });
      this.$refs.app.setState( state );
    }
  
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   .v-toolbar--fixed{
       position:absolute;
   }

   .calender-section{

      margin: 2% 0%;
   }

   .ds-calendar-event{

      
       position:inherit !important;
           white-space: initial !important;
   }

   .v-navigation-drawer{
       display :none;
   }

   .v-content.ds-expand{
       padding:0px 0px 0px !important;

   }

   .v-toolbar__title.ml-0{
       display:none;
   }

   .ds-week-header-day{
       border: 1px solid #e0e0e0 !important;
       border-radius: 2px;
       width: 146px;
       height: 50px;
       padding: 13px !important;
       text-align: center;
   }



   .ds-day{

       border: 1px solid #e0e0e0 !important;
        padding-top: 5% !important;
        text-align: center;
   }
    
.ds-app-calendar-toolbar{
    display:none;
}

.ds-calendar-event{
    background-color:#ffb603 !important;
}

.controls{
    cursor:pointer;
}

.ds-dom.ds-today-dom{
    
background-color:#ffb603 !important;

}

.ds-week-header-day.ds-week-header-today{
    
background-color:#ffb603 !important;
color: #fff !important;
}

@media only screen and (max-width: 414px) {
    .ds-week-header-day{
       border: 1px solid #e0e0e0 !important;
       border-radius: 2px;
       width: auto;
       height: auto;
       padding: 0px !important;
       text-align: center;
   }
}
</style>
