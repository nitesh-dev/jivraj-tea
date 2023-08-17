<script setup lang='ts'>
defineProps<{
    full: boolean
}>()
</script>
<template>
    <section class="about">
        <img src="../public/images/outlines/tea-outline.png" class="outline">
        <div class="page first">
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

        <div v-if="full" class="page middle">
            <h4>OUR HISTORY</h4>
            <h2>From the organic tea gardens in India</h2>
            <p>Tea is more than just a means of refreshment in India. It is a feeling; a feeling of togetherness, a feeling
                of satisfaction and a feeling of immense happiness. It is a binding factor for more than a million people of
                India.
            </p>

            <p>
                For almost five decades now, Jivraj Tea, has made sure to keep the flame of togetherness alive through its
                variety of Tea. The company has taken each factor into account and delivered one of the most loved and
                preferred tea in India. The dominant flavor and strong aroma sets Jivraj Tea apart from other brands.
            </p>
            <p>
                A truly unique range. A truly unique taste. Jivraj tea is a classic daily Indian blend that celebrates the
                fusion of age old traditions and the excitement of modern India. The Jivraj blend infuses swiftly and brings
                out rich color and a strong flavor that truly ignites one’s senses. A veteran tea drinker’s favorite, the
                strong, dominant flavor revitalizes your system and feeds you the energy you need for the day.
            </p>

            <p>From the organic tea gardens in India, choicest fresh leaves are handpicked and rightfully blend to make
                Jivraj Tea. Our tea assures refreshing flavor and strong aroma in every sip. It is the goodness of fresh
                leaves and rejuvenation of energy that we aspire to deliver through our tea.
            </p>
            <p> In this journey of Jivraj, the company has seen milestones of success and has successfully established
                number of stores to sell its Tea. Whether it was store or people, Jivraj has seen itself growing into one
                large happy family. Our consumers are not only in India but abroad as well. Their constant love, support and
                affection have given us the strength to carry on, on our journey, only to make it that much more capable.
            </p>
            <p>
                We at Jivraj aspire to work to our full potential only to deliver quality tea to our consumers. We hold the
                trust of our consumers dearly and wish to continue to provide such excellence through our products.
            </p>
        </div>

        <div v-if="full" class="page last">
            <div class="content">
                <div class="left">
                    <h4>ABOUT COMPANY</h4>
                    <h2>SAMAARA PREMIUM TEA</h2>
                    <p>Straight from the tea gardens of Assam, with the goodness of nature and taste like no other, we bring
                        to you a premium range of tea leaves; Samaara. Carefully picked and methodically processed, this tea
                        is a perfect starter for a bright new day. The fine quality of the tea leaves, magnetic aroma and
                        strong flavor set this tea apart. Samaara tea is a version that aims to energize and refresh one and
                        all.</p>
                </div>
                <div class="right">
                    <img src="../public/images/brand.png">
                </div>

            </div>

        </div>
    </section>
</template>
<style scoped>
.about {
    min-height: 400px;
    position: relative;
}

.about .outline{
    right: 0;
    top: 0;
    width: 200px;
    position: absolute;
}

.about .page.first {

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
}

.about .page.last {
    margin-top: 5rem;
    margin-bottom: 2rem;
}

.about .page.last .content {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.about .page.last .left {
    width: 60%;
}


.about .page.last .right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about .page.last .right img {
    width: 100%;
    max-width: 300px;
}


.about button {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.about button svg {
    fill: white;
}

.about .page.first>img {
    width: 80%;
    display: block;
    margin: auto;
}

.about h2 {
    margin-top: 0;
    font-weight: bold;
}

.about h4 {
    margin-bottom: 0.4em;
    color: var(--color-primary);
}

@media only screen and (max-width: 800px) {
    .about .page.first {
        grid-template-columns: 100%;
        gap: 0;
        justify-content: center;
    }

    .about .page.first>img {
        width: 80%;
        max-width: 400px;
    }
}

@media only screen and (max-width: 650px) {
    .about .page.last .content {
        display: flex;
        flex-direction: column-reverse;
        gap: 2rem;
    }

    .about .page.last .left {
        width: 100%;
    }


    .about .page.last .right {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}
</style>