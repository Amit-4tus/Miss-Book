'use strict';

export default {
    props: ['bookData'],

    template: `
        <section class="book-details">
            {{bookTitle}}
            <img :src="bookImgUrl"/>
        </section>
    `,

    computed: {
        bookTitle() {
            return this.bookData.title
        },
        bookImgUrl() {
            return this.bookData.thumbnail;
        },
    },
};