'use strict';

import theRouter from './routes.js'

let root = {
    el: '.root',

    router: theRouter,

    template: `
        <section>
            <h1>Book Shop</h1>
            <router-link to="/about">About</router-link>
            <router-link to="/book-app">Book App</router-link>

            <router-view></router-view>
        </section>
    `,
};

new Vue(root);