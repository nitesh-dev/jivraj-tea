<script setup lang='ts'>

</script>
<template>
    <Header></Header>
    <HomeLanding></HomeLanding>

    <!-- ------------ about section -------------- -->
    <section class="about">
        <div class="page">
            <img src="../public/images/tea.png" alt="tea">
            <div class="content">
                <h4>ABOUT COMPANY</h4>
                <h2>Time Changes But Quality & Taste Never Change</h2>
                <p>Tea is more than just a means of refreshment in India. It is a feeling; a feeling of togetherness, a
                    feeling of satisfaction and a feeling of immense happiness. It is a binding factor for more than a
                    million people of India.
                </p>
                <p>For almost five decades now, Jivraj Tea, has made sure to keep the flame of togetherness alive through
                    its variety of Tea. The company has taken each factor into account and delivered one of the most loved
                    and preferred tea in India. The dominant flavor and strong aroma sets Jivraj Tea apart from other
                    brands.
                </p>
                <button class="primary">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </div>

        </div>
    </section>

    <Products></Products>
    <Testimonial></Testimonial>
    <Gallery></Gallery>



</template>
<style scoped>
/* ------------------ about section ---------------- */
.about {
    min-height: 400px;
}

.about .page {

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;

}


.about button {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.about button svg {
    fill: white;
}

.about .page>img {
    width: 80%;
}

.about h2 {
    margin-top: 0;
    font-weight: bold;
}

.about h4 {
    margin-bottom: 0.4em;
    color: var(--color-primary);
}





</style>