'use strict';

export default {
    template: `
        <section class="books-filter">
            <form>
                <select class="sort-by" @change="setSort">
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
                <input type="number" placeholder="Minimum Price" @change="setPriceFilterMin"/>
                <input type="number" placeholder="Maximum Price" @change="setPriceFilterMax"/>
            </form>
        </section>
    `,

    data() {
        return {
            sortBy: null,
            filterByPrice: {min: 0, max: 9999999},
        };
    },

    methods: {
        setSort(ev) {
            this.sortBy = ev.target.value;
            this.$emit('filter', this.toBeEmitted);
        },
        setPriceFilterMin(min) {
            if (min.target.value === '') this.filterByPrice.min = 0;
            else {
                this.filterByPrice.min = min.target.value;
                this.$emit('filter', this.toBeEmitted);
            };
        },
        setPriceFilterMax(max) {
            if (max.target.value === '') this.filterByPrice.max = 9999999;
            else {
                this.filterByPrice.max = max.target.value;
                this.$emit('filter', this.toBeEmitted);
            }           
        },
    },

    computed: {
        toBeEmitted() {
            return {
                sortBy: this.sortBy,
                filterByPrice: this.filterByPrice,
            };
        },
    },
};
