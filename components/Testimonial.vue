<script setup lang='ts'>
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
                    <Span>View More</Span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </div>
            <div class="right">
                <div class="testimonial-container">
                    <div class="container">
                        <div class="card" v-for="card, index in 8">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been
                                the industry's standard dummy text ever since the 1500s.
                            </p>
                            <hr>
                            <div class="detail">
                                <img src="../public/images/profiles/profile 1.png" alt="profile icon">
                                <div>
                                    <p>Jesiu Petit</p>
                                    <span>CUSTOMER</span>
                                </div>
                                <h4>#0{{ index + 1 }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dots">
                    <span class="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped>
.testimonial {
    min-height: 500px;
    background-image: url('../public/images/outlines/leaf-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.testimonial>div {
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
}

.testimonial .left{
    margin-right: 2rem;
}
.testimonial .left h3 {
    margin: 0;
}

.testimonial .left img {
    width: 80px;
    margin: 1rem 0;
}

.testimonial .left h4 {
    margin: 0;
    margin-bottom: 0.8em;
    color: var(--color-primary);
}



/* ---------------- right part ---------- */

.testimonial .testimonial-container{
    overflow: hidden;

}
.testimonial .right .container {
    display: flex;
    gap: 0.8rem;
    padding: 1rem;

}

.testimonial .card {
    min-width: 250px;
    width: 250px;
    background-color: white;
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.07);
    padding: 12px;
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

.testimonial .right .dots{
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
}

.testimonial .right .dots span.active{
    background-color: var(--color-primary);
    width: 20px;
}
</style>