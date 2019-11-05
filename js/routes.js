'use strict';

import bookApp from './cmps/book-app-cmp.js';
import about from './cmps/about-cmp.js';

const myRoutes = [
    {
        path: '/book-app',
        component: bookApp,
    },
    {
        path: '/about',
        component: about,
    },
];

const myRouter = new VueRouter({routes: myRoutes});

export default myRouter;