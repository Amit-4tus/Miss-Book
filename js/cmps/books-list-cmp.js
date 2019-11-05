'use strict';

import bookPreview from './book-preview-cmp.js';

export default {
    props: ['books'],

    template: `
        <section class="book-list">
            <div class="book-preview-container" v-for="book in books">
                <book-preview :bookData="book" @clicked="bookClicked"></book-preview>
            </div>
        </section>
    `,

    data() {
        return {
            
        };
    },

    created() {
        // console.log('list',this.books);
    },

    methods: {
        bookClicked(bookData){
            this.$emit('bookClicked', bookData);
        },
    },

    components: {
        bookPreview,
    }
};