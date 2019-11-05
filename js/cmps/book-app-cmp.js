'use strict';

import getBooksData from '../sevices/book-service.js';
import booksFilter from './books-filter-cmp.js';
import booksList from './books-list-cmp.js';
import bookDetails from './book-details-cmp.js';

export default {
    name: 'book-app',

    template: `
        <section>
            <header>
                <nav></nav>
            </header>
            <books-filter @filter="doFilter"></books-filter>
            <books-list :books="booksToShow" @bookClicked="bookClicked"></books-list>
            <book-details v-if="selectedBook" :bookData="selectedBook"></book-details>
        </section>
    `,

    data() {
        return {
            getBooksData,
            filterByPrice: {min: 0, max: 9999999},
            sortBy: 'name',
            selectedBook: null,
            booksToShow: null,
        }
    },
    
    methods: {
        doFilter(filter) {
            this.sortBy = filter.sortBy;
            this.filterByPrice = filter.filterByPrice;
            this.getBooksToShow();
        },
        compareByName(firstEl, secEl) {
            return firstEl.title.localeCompare(secEl.title);
        },
        compareByPrice(firstEl, secEl) {
            return firstEl.listPrice.amount - secEl.listPrice.amount;
        },
        doFilterByPrice(book) {
            let bookPrice = book.listPrice.amount;
            return (bookPrice > +this.filterByPrice.min && bookPrice < +this.filterByPrice.max);
        },
        bookClicked(bookData) {
            this.selectedBook = bookData;
        },
        getBooksToShow() {
            let cmprFn;
            switch (this.sortBy) {
                case 'name':
                    cmprFn = this.compareByName;
                    break;
                case 'price':
                    cmprFn = this.compareByPrice;
                    break;
            };
            this.getBooksData()
                .then(x => {
                    x.sort(cmprFn)
                    this.booksToShow = x.filter(this.doFilterByPrice);
                });
        },
    },

    created() {
        this.getBooksToShow();
    },

    components: {
        bookDetails,
        booksFilter,
        booksList,
    },
};