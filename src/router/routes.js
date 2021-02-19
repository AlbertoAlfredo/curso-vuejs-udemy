import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../components/HcodeSection/HcodeSectionBanner';
import News from './../components/HcodeSection/HcodeSectionNews';

Vue.use(VueRouter)

export default new VueRouter({  
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home,
        },
        {
            path: '/news/',
            component: News,
    }
    ]
})