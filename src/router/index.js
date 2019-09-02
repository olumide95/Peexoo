import Vue from "vue";
import Router from "vue-router";
import Availability from "@/components/Availability";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "Availability",
        component: Availability
    }]
});