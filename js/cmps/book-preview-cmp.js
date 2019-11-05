'use strict';

export default {
    props: ['bookData'],
    template: `
        <section class="book-preview" @click="bookClicked">
            <div class="book-title">{{bookData.title}}</div>
            <div class="book-price">{{bookData.listPrice.amount}} {{currencyIcon}}</div>
        </section>
    `,

    methods: {
        bookClicked() {
            this.$emit('clicked', this.bookData);
        },
    },

    computed: {
        currencyIcon() {
            switch (this.bookData.listPrice.currencyCode) {
                case 'EUR':
                    return '€';
                case 'ILS':
                    return '₪';
                case 'USD':
                    return '$';
            };
        },
    }
};