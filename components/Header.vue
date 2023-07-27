<script setup lang='ts'>
defineProps<{
    url: String
}>()
</script>
<template>
    <header>
        <div class="page">
            <div class="image-holder">
                <img src="../public/images/icon.png" alt="icon">
            </div>
            <div class="center">
                <div  :class="{'active' : url == '/'}">
                    <NuxtLink to="/">Home</NuxtLink>
                    <span></span>
                </div>
                <div :class="{'active' : url == 'about'}">
                    <NuxtLink to="/about">About Us</NuxtLink>
                    <span></span>
                </div>

                <div :class="{'active' : url == 'products'}">
                    <NuxtLink to="products">Products</NuxtLink>
                    <span></span>
                </div>

                <div :class="{'active' : url == 'reviews'}">
                    <NuxtLink to="reviews">Reviews</NuxtLink>
                    <span></span>
                </div>

                <div :class="{'active' : url == 'gallery'}">
                    <NuxtLink to="/gallery">Gallery</NuxtLink>
                    <span></span>
                </div>

                <div :class="{'active' : url == 'blog'}">
                    <NuxtLink to="/blog">Blog</NuxtLink>
                    <span></span>
                </div>

                <div :class="{'active' : url == 'contact'}">
                    <NuxtLink to="contact">Contact Us</NuxtLink>
                    <span></span>
                </div>
            </div>

            <div class="right">
                <div class="cart">
                    <button class="icon-button">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Z" />
                        </svg>
                    </button>
                    <span></span>
                    <button class="icon-button">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772-1.26-4.248-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75Zm5.073 6.59.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287.014.053ZM11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM18 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z" />
                        </svg>
                    </button>
                </div>
                <div class="auth">
                    <button class="primary-outline">Sign Up</button>
                    <button class="primary">Login</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
header {
    background-color: var(--color-surface);
    width: 100%;
    height: 60px;
    position: sticky;
    z-index: 100;
    top: 0;
}

header .page {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


header .image-holder {
    position: relative;
    width: 110px;
    height: 60px;
}

header img {
    height: 80px;
    width: auto;
    position: absolute;
    top: 10px;
}




header .center{
    display: flex;
    gap: 1em;
}

header .center div{
    position: relative;
}

header .center span{
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: transparent;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
}

header .center .active a{
    color: var(--color-primary);
}

header .center .active span{
    background-color: var(--color-primary);
}




header .right{
    display: flex;
    gap: 1rem;
}

header .cart{
    display: flex;
    align-items: center;
}


header .cart span{
    display: block;
    width: 1px;
    background-color: rgb(202, 202, 202);
    height: 20px;
    margin: 0 8px;
}

header .auth{
    display: flex;
    gap: 0.4rem;
}
</style>