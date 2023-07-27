<script setup lang='ts'>
</script>
<template>
    <footer>
        <div class="page">
            <img src="../public/images/logo.png" alt="icon">
            <div class="info">
                <h4>Contact Info</h4>
                <div>
                    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m7.772 2.439 1.076-.344c1.01-.322 2.087.199 2.52 1.217l.859 2.028c.374.883.167 1.922-.514 2.568L9.819 9.706c.116 1.076.478 2.135 1.084 3.177a8.678 8.678 0 0 0 2.271 2.595l2.275-.76c.863-.287 1.802.044 2.33.821l1.233 1.81c.615.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.977 1.114-3.052.778-2.539-.792-4.873-3.143-7.003-7.053-2.133-3.916-2.886-7.24-2.258-9.968.264-1.148 1.081-2.063 2.149-2.404Z" />
                    </svg>
                    <span>+91 96246 99999</span>
                </div>
                <div>
                    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z" />
                    </svg>
                    <span>customercare@jivrajtea.co.in</span>
                </div>
                <div>
                    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m18.157 16.882-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 1 1 12.314 0ZM14.5 11a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
                    </svg>
                    <span>5/258/259, Jivraj Chambers, Ruwala Tekra, Bhagal, Surat - 395003, Gujarat, INDIA</span>
                </div>
            </div>

            <div class="links">
                <h4>Quick Links</h4>
                <div>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/about">About Us</NuxtLink>
                    <NuxtLink to="/products">Products</NuxtLink>
                    <NuxtLink to="/reviews">Reviews</NuxtLink>
                    <NuxtLink to="/gallery">Gallery</NuxtLink>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                    <NuxtLink to="/contact">Contact Us</NuxtLink>
                </div>
            </div>

            <div class="join">
                <h4>Want To Get Motivated? Stay Connected!</h4>
                <form>
                    <input type="email" placeholder="Your Email Address">
                    <button class="primary">
                        <span>Submit</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>

                </form>

            </div>
        </div>
        <p>All rights reserved © Jivraj Tea 2019</p>
    </footer>
</template>
<style scoped>
footer {
    background-color: black;
    padding-top: 2rem;
    overflow: auto;

}

footer .page {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr 2fr;
    gap: 3rem;
}

footer img {
    width: 100%;
    display: block;
}

footer * {
    color: white;
}

footer a {
    display: block;
}

footer h4 {
    margin-top: 0;
    font-weight: normal;
}

footer a,
footer span {
    opacity: 0.7;
    margin: 0.6em 0;
}

footer .info div {
    display: grid;
    grid-template-columns: max-content auto;
    gap: 8px;
    margin: 0.6em 0;
}

footer .info span {
    margin: 0;
}

footer .info svg {
    fill: white;
    width: 20px;
    opacity: 0.7;
}

footer input {
    outline: none;
    outline: 1px solid rgb(54, 54, 54);
    background-color: transparent;
    border: none;
    padding: 0.8em 1em;
    font-size: var(--medium-font);
    width: 100%;
    color: rgba(255, 255, 255, 0.596);
}

footer button {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
    border-radius: 0;
}

footer>p {
    margin-top: 4rem;
    text-align: center;
    border-top: 1px solid rgb(58, 58, 58);
    padding: 2em 0;
    font-size: var(--small-font);
    color: rgba(255, 255, 255, 0.418);
}


@media only screen and (max-width: 900px) {
    footer .page {
        grid-template-columns: 100%;
    }

    footer img {
        width: 100%;
        max-width: 200px;
        margin: auto;
    }
}
</style>