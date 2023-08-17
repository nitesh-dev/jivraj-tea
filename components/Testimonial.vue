<script setup lang='ts'>

import profile1 from '@/public/images/profiles/profile 1.png'
import profile2 from '@/public/images/profiles/profile 2.png'
import profile3 from '@/public/images/profiles/profile 3.png'

const data = ref([
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Jesiu Petit',
        role: 'CUSTOMER',
        url: profile1
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'James Mango',
        role: 'CUSTOMER',
        url: profile2
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'James Mango',
        role: 'CUSTOMER',
        url: profile3
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Jesiu Petit',
        role: 'CUSTOMER',
        url: profile1
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'James Mango',
        role: 'CUSTOMER',
        url: profile2
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'James Mango',
        role: 'CUSTOMER',
        url: profile3
    }

])


const scrollContainer = ref<HTMLDivElement>()
const dotsCount = ref(0)
const activeDotIndex = ref(0)
let childWidth = 0


onMounted(function () {
    onResize()
    document.body.onresize = onResize
    scrollContainer.value!!.onscroll = onScroll
})


function onResize() {
    if (scrollContainer.value!!.children.length == 0) return
    childWidth = scrollContainer.value!!.firstElementChild!!.clientWidth

    // calculating dots count
    dotsCount.value = scrollContainer.value!!.childElementCount - Math.floor(scrollContainer.value!!.clientWidth / childWidth)

}

function onScroll(event: any) {
    activeDotIndex.value = Math.floor(scrollContainer.value!!.scrollLeft / childWidth)
}

</script>
<template>
    <section class="testimonial">
        <div class="page">
            <div class="left">
                <img src="../public/images/quotes.png" alt="quotes">
                <h4>WHAT PEOPLE SAY</h4>
                <h3>Client's Talk</h3>
                <p>We have a wealth of experience working as main building contractors on all kinds of projects, big and
                    small, from home maintenance and improvements to extensions.</p>
                <button class="primary">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </div>
            <div class="right">
                <div class="testimonial-container">
                    <div ref="scrollContainer" class="container hide-scroll">
                        <div class="card" v-for="item, index in data">
                            <div>
                                <p>{{ item.message }}</p>
                                <hr>
                                <div class="detail">
                                    <img :src="item.url" alt="profile icon">
                                    <div>
                                        <p>{{ item.name }}</p>
                                        <span>{{ item.role }}</span>
                                    </div>
                                    <h4>#0{{ index + 1 }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dots">
                    <span :class="{ 'active': activeDotIndex == index }" v-for="item, index in dotsCount" :key="index"></span>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped>
.testimonial {
    min-height: 400px;
    background-image: url('../public/images/outlines/leaf-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.testimonial>div {
    position: relative;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
}

.testimonial .left {
    margin-right: 2rem;
    widows: 100%;
}

.testimonial .left h3 {
    margin: 0;
    font-weight: bold;
}

.testimonial .left img {
    width: 80px;
    margin: 1rem 0;
}

.testimonial .left h4 {
    margin: 0;
    margin-bottom: 0.8em;
    color: var(--color-primary);
    font-weight: bold;
}



/* ---------------- right part ---------- */

.testimonial .testimonial-container {
    width: 100%;
}

.testimonial .right {
    width: 100%;
}

.testimonial .right .container {
    overflow: auto;
    display: flex;
    padding: 1rem 0;

}

.testimonial .card {
    min-width: 280px;
    width: 280px;
}

.testimonial .card>div {
    background-color: white;
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.07);
    padding: 12px;
    margin: 0 6px;
}

.testimonial .card hr {
    border: none;
    border-bottom: 1px solid rgb(231, 231, 231);
}

.testimonial .card .detail {
    display: flex;
    align-items: center;
    gap: 0.8em;
}

.testimonial .card img {
    width: 48px;
    height: 48px;
    object-fit: cover;
}

.testimonial .card .detail p {
    margin: 0;
    color: var(--color-on-surface);
    font-weight: bold;
    line-height: normal;
}

.testimonial .card .detail span {
    font-size: calc(var(--medium-font) - 2px);
    color: var(--color-on-surface-variant);
    margin: 0;
    line-height: normal;
}

.testimonial .card .detail h4 {
    margin-left: auto;
    color: rgb(184, 181, 181);
}

.testimonial .right .dots {
    display: flex;
    gap: 8px;
    justify-content: center;
}

.testimonial .right .dots span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgb(202, 202, 202);
    border-radius: 8px;
    transition: all 300ms;
}

.testimonial .right .dots span.active {
    background-color: var(--color-primary);
    width: 20px;
}

@media only screen and (max-width: 900px) {
    .testimonial>div {
        grid-template-columns: 40% 60%;
    }
}

@media only screen and (max-width: 700px) {
    .testimonial>div {
        grid-template-columns: 100%;
    }

    .testimonial .left{
        margin-right: 0;
    }

    .testimonial{
        padding-top: 2rem;
    }

    .testimonial .left h4, .testimonial .left h3, .testimonial .left p{
        text-align: center;
    }

    .testimonial .left img{
        position: absolute;
        right: 1rem;
    }

    .testimonial .left button{
        margin: auto;
    }
}
</style>