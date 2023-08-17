<script setup lang='ts'>

import blog1 from '@/public/images/blogs/blog1.png'
import blog2 from '@/public/images/blogs/blog2.png'
import blog3 from '@/public/images/blogs/blog3.png'
import blog4 from '@/public/images/blogs/blog4.png'


defineProps<{
    showBorder: boolean
}>()

const blogs = ref([
    {
        url: blog1,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog2,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog3,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog4,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog1,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog2,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog3,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    },
    {
        url: blog4,
        loc: 'Jivraj Tea',
        name: 'Lorem Ipsum is simply dummy text of the printing.',
        date: '10.05.2021'
    }

])
const scrollContainer = ref<HTMLDivElement>()

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
    <section class="blogs">
        <div class="page">
            <h4>Latest News And Blog</h4>
            <div class="heading">
                <h2>Stay Informed Through Our Blog</h2>
                <div class="slider">
                    <button @click="scrollLeft" class="icon-button">
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.296 12 8.492-8.727a.75.75 0 1 0-1.075-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.075-1.046L4.295 12Z" />
                        </svg>
                    </button>
                    <button @click="scrollRight" class="icon-button">
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m19.704 12-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div ref="scrollContainer" class="blogs-container hide-scroll">
                <div>
                    <div class="card" v-for="item in blogs">
                        <div :class="{'border': showBorder}">
                            <img :src="item.url" alt="blog1">
                            <span>IN: {{ item.loc }}</span>
                            <p>{{ item.name }}</p>
                            <div class="status">
                                <div>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM4.5 8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5Zm11.75 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.25-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.5-6h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75Z" />
                                    </svg>
                                    <span>{{ item.date }}</span>
                                </div>

                                <div>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438-1.57 1.834-3.957 2.739-7.102 2.739-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.249 2.249 0 0 1 2.249-2.25h11.501Zm0 1.5H6.253a.749.749 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461 1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.749.749 0 0 0-.749-.75ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                                    </svg>
                                    <span>By Company Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped>
.blogs {
    min-height: 400px;
    margin: 4rem 0;
}

.blogs h2 {
    margin: 0;
    font-weight: bold;
}

.blogs h4 {
    margin-bottom: 0.4em;
    color: var(--color-primary);
}


.blogs .heading {
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
}

.blogs .heading .slider {
    display: flex;
    gap: 0.4rem;
}

.blogs .heading button {
    border: 1px solid var(--color-primary);
    padding: 0;
    width: 28px;
    height: 28px;
    fill: var(--color-primary);
}

.blogs .heading button svg {
    width: 16px;
    fill: inherit;
}

.blogs .heading button:last-child {
    background-color: var(--color-primary);
    fill: white !important;
}

.blogs .blogs-container {
    margin: 2rem 0;
    overflow: auto;
    scroll-behavior: smooth;
}

.blogs .blogs-container>div {
    display: flex;

}



/* ------- card --------- */

.blogs .card>div {
    margin: 1rem 6px;
    width: 280px;
    min-width: 280px;
    padding: 12px;
    background-color: white;
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.08);
}

.blogs .card>div.border{
    border-left: 3px solid var(--color-primary);
}

.blogs .card:first-child {
    padding-left: 6px;
}

.blogs .card:last-child {
    padding-right: 6px;
}


.blogs .card img {
    width: 100%;
    aspect-ratio: 1.2/1;
    object-fit: cover;
}

.blogs .card>div>span {
    margin-top: 1em;
    display: block;
    font-size: var(--small-font);
}

.blogs .card p {
    color: var(--color-on-surface);
    font-weight: bold;
    margin-top: 0.4em;
}

.blogs .card .status {
    display: flex;
    gap: 1em;
}

.blogs .card .status div {
    display: flex;
    align-items: center;
    gap: 4px;
}

.blogs .status span {
    font-size: var(--small-font);
}

.blogs svg {
    fill: var(--color-primary);
    width: 16px;
}


@media only screen and (max-width: 600px) {
    .blogs .heading .slider {
        display: none;
    }

    .blogs h2, .blogs h4 {
        text-align: center;
    }
}
</style>