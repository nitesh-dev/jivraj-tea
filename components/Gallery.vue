<script setup lang='ts'>
</script>
<template>
    <section class="gallery">
        <div class="page">
            <h4>Gallery</h4>
            <h2>Explore Our Visual Showcase</h2>
            <div class="gallery-container">
                <div>
                    <img src="../public/images//gallery/gallery_1.png">
                    <img src="../public/images//gallery/gallery_2.png">
                </div>
                <div>
                    <img src="../public/images//gallery/gallery_3.png">
                    <img src="../public/images//gallery/gallery_4.png">
                </div>
                <div>
                    <img src="../public/images//gallery/gallery_5.png">
                    <img src="../public/images//gallery/gallery_6.png">
                </div>
            </div>
            <button class="primary">
                <span>View More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </button>
        </div>
    </section>
</template>
<style scoped>
.gallery {
    margin: 4rem 0;
    min-height: 400px;
}

.gallery h4 {
    color: var(--color-primary);
    text-align: center;
}

.gallery h2 {
    text-align: center;
}

.gallery .gallery-container img {
    width: 100%;
}

.gallery .gallery-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.6rem;
}

.gallery .gallery-container div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.gallery button {
    margin: 2rem auto;
}

@media only screen and (max-width: 700px) {
    .gallery .gallery-container {
        grid-template-columns: 1fr 1fr;
    }

    .gallery .gallery-container div:last-child {
        display: none;
    }
}
</style>