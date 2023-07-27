<script setup lang='ts'>
defineProps<{
    name: String
}>()

</script>
<template>
    <section class="other-landing">
        <div>
            <img src="../public/images/tea-outline.png">
            <div class="page">
                <h1>{{ name }}</h1>
            </div>
        </div>
    </section>
</template>
<style scoped>
.other-landing {
    background-image: url('../public/images/tea-landing.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.other-landing>div {
    height: 200px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
}

.other-landing img {
    height: 110%;
    position: absolute;
    left: -50px;
}

.other-landing .page {
    display: flex;
    align-items: center;
    height: 100%;
}

.other-landing h1 {
    color: white;
    font-weight: normal;
}

@media only screen and (max-width: 800px) {
    .other-landing img {
        height: 80%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        right: 2rem;
    }
}
</style>