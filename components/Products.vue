<script setup lang='ts'>

import product1 from '@/public/images/products/product1.png'
import product2 from '@/public/images/products/product2.png'
import product3 from '@/public/images/products/product3.png'
import product4 from '@/public/images/products/product4.png'

defineProps<{
    rowCount: number
}>()

const scrollContainer = ref<HTMLDivElement>()

const products = ref([
    {
        url: product1,
        name: 'JIVRAJ CTC',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product2,
        name: 'JIVRAJ DUST',
        price: '₹110.00 - ₹430.00'
    },
    {
        url: product3,
        name: 'JIVRAJ SAMAARA BOX',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product4,
        name: 'JIVRAJ PREMIUM GREEN TEA',
        price: '₹200.00'
    }, {
        url: product1,
        name: 'JIVRAJ CTC',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product2,
        name: 'JIVRAJ DUST',
        price: '₹110.00 - ₹430.00'
    },
    {
        url: product3,
        name: 'JIVRAJ SAMAARA BOX',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product4,
        name: 'JIVRAJ PREMIUM GREEN TEA',
        price: '₹200.00'
    }, {
        url: product1,
        name: 'JIVRAJ CTC',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product2,
        name: 'JIVRAJ DUST',
        price: '₹110.00 - ₹430.00'
    },
    {
        url: product3,
        name: 'JIVRAJ SAMAARA BOX',
        price: '₹49.00 - ₹465.00'
    },
    {
        url: product4,
        name: 'JIVRAJ PREMIUM GREEN TEA',
        price: '₹200.00'
    }
])

function scrollLeft() {
    if (scrollContainer.value == undefined) return
    scrollContainer.value.scrollLeft = 0
}

function scrollRight() {
    if (scrollContainer.value == undefined) return
    scrollContainer.value.scrollLeft = scrollContainer.value.scrollWidth
}

</script>
<template>
    <section class="products">
        <div class="page">
            <h4>OUR PRODUCTS</h4>
            <div class="heading">
                <h2>Discover Our Products Line</h2>
                <div v-if="rowCount == 1" class="slider">
                    <button @click="scrollLeft" class="icon-button">
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.296 12 8.492-8.727a.75.75 0 1 0-1.075-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.075-1.046L4.295 12Z" />
                        </svg>
                    </button>
                    <button @click="scrollRight" class="icon-button">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m19.704 12-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div ref="scrollContainer" class="products-container hide-scroll">
                <Product v-for="item in products" :url="item.url" :name="item.name" :price="item.price"></Product>
            </div>

            <div v-for="item, index in rowCount - 1" class="products-container hide-scroll">
                <Product v-for="item in products" :url="item.url" :name="item.name" :price="item.price"></Product>
            </div>

            <button v-if="rowCount == 1" class="primary">
                <span>View All Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </button>
        </div>
    </section>
</template>
<style scoped>
.products {
    min-height: 400px;
    margin: 4rem 0;
}

.products h2 {
    margin: 0;
    font-weight: bold;
}

.products h4 {
    margin-bottom: 0.4em;
    color: var(--color-primary);
}

.products .products-container {
    overflow-x: auto;
    margin: 2rem 0;
    display: flex;
    gap: 12px;
    scroll-behavior: smooth;
}


.products button {
    margin: auto;
}


.products .heading {
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
}

.products .heading .slider {
    display: flex;
    gap: 0.4rem;
}

.products .heading button {
    border: 1px solid var(--color-primary);
    padding: 0;
    width: 28px;
    height: 28px;
    fill: var(--color-primary);
}

.products .heading button svg {
    color: inherit;
    width: 16px;
}

.products .heading button:last-child {
    background-color: var(--color-primary);
    fill: white;
}

@media only screen and (max-width: 600px) {
    .products .heading .slider {
        display: none;
    }
}
</style>