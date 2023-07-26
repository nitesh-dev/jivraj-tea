<script setup lang='ts'>
</script>
<template>
    <section class="landing">
        <img src="../public/images/tea-outline.png" alt="tea">
        <div>
            <div class="page">
                <div class="content">
                    <h3>ORIGINAL TEA</h3>
                    <h1>Server The Original Taste Of Jivraj, Always.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.</p>
                    <button class="primary">
                        <span>Discover Our Tea</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped>
.landing {
    background-image: url('../public/images/tea-garden.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: auto;
}

.landing>div {
    background-color: rgba(0, 0, 0, 0.295);
}

.landing>img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    right: 100px;
}

.landing button {
    display: flex;
    align-items: center;
    gap: 1em;
}

.landing button svg {
    fill: white;
}

.landing .page {
    display: flex;
    align-items: center;
    min-height: 500px;
}

.landing .content {
    max-width: 500px;
}

.landing .content * {
    color: white;
}

.landing h3 {
    font-weight: normal;
}

.landing h1 {
    margin: 0;
}
</style>