<script setup lang='ts'>
</script>
<template>
    <section class="contact-us">
        <img src="../public/images/outlines/leaf-outline2.png">
        <div class="page">
            <img src="../public/images/tea-garden-landscape.png" alt="garden">
            <div class="form-holder">
                <form>
                    <h4>Contact With Us</h4>
                    <h2>Send Your Message Us</h2>
                    <div class="input-holder">
                        <input placeholder="Name" type="text">
                        <input placeholder="Email" type="email">
                    </div>
                    <div class="input-holder">
                        <input placeholder="Phone number" type="text">
                        <input placeholder="Subject" type="text">
                    </div>
                    <textarea rows="4" placeholder="Your Message"></textarea>
                    <button class="primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.contact-us {
    position: relative;
    margin: 4rem 0;
}

.contact-us>img {
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: cover;
    z-index: -1;
}



.contact-us .page {
    display: grid;
    grid-template-columns: 50% 50%;
    min-height: 500px;
}

.contact-us .page img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}



.contact-us form {
    background-color: white;
    height: max-content;
    padding: 1.5rem;
    position: absolute;
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    width: 110%;
    box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.14);
}

.contact-us .form-holder {
    position: relative;
}

.contact-us h4 {
    color: var(--color-primary);
    margin: 0;
    margin-bottom: 0.4em;
}

.contact-us h2 {
    margin: 0;
    margin-bottom: 1em;
}

.contact-us form div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    margin-top: 0.6rem;
}

.contact-us input,
.contact-us textarea {
    outline: none;
    outline: 1px solid rgb(228, 228, 228);
    border: none;
    padding: 0.6em 1em;
    font-size: var(--medium-font);
    width: 100%;
}

.contact-us textarea {
    margin-top: 0.6rem;
    resize: none;
}

.contact-us button {
    margin-top: 1rem;
    width: 100%;
}

@media only screen and (max-width: 1000px) {
    .contact-us form {
        width: 120%;
    }
}

@media only screen and (max-width: 700px) {
    .contact-us form {
        width: 100%;
    }

    .contact-us .page {
        grid-template-columns: 100%;
    }

    .contact-us form {
        position: static;
        transform: translateY(0);
    }

}
</style>