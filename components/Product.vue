<script setup lang='ts'>
defineProps<{
    url: string,
    name: string,
    price: string
}>()
</script>
<template>
    <div class="product">
        <div class="icons">
            <div class="fav">
                <input type="checkbox">
                <svg class="un-checked" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Zm6.548 6.54L12 19.485 4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48Z" />
                </svg>
                <svg class="checked" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Z" />
                </svg>

            </div>

            <div>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 10a.75.75 0 0 0-.75-.75h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 1 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 .75-.75Z" />
                    <path
                        d="M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Z" />
                </svg>
            </div>
            <div>
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z" />
                </svg>
            </div>
        </div>
        <div class="card">
            <div class="image-holder">
                <img :src="url">
            </div>
            <div class="detail">
                <div class="rating">
                    <svg v-for="item in 5" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" />
                    </svg>
                </div>
                <p>{{ name }}</p>
                <span>{{ price }}</span>
            </div>

        </div>
    </div>
</template>
<style scoped>
.product {
    width: 220px;
    height: 280px;
    background-color: var(--color-surface-variant);
    position: relative;
    min-width: 220px;
}

.product .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.product .image-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.product .card img {
    display: block;
    width: 80px;
    height: auto;
    object-fit: contain;
}

.product .detail {
    width: 100%;
    height: max-content;
    padding: 12px;
    padding-top: 0;
}

.product .detail p {
    font-weight: bold;
    color: var(--color-on-surface);
    margin: 0;
}

.product .rating {
    display: flex;
}

.product .rating svg {
    fill: #FFC107;
    width: 16px;
}

.product .detail span {
    color: var(--color-on-surface-variant);
}




/* --------------- icons -------------------- */

.product .icons {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.product .icons div {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--color-primary);
}

.product .icons div:hover{
    background-color: var(--color-primary);
    fill: white;
}

.product .icons div:last-child {
    margin-top: auto;
}

.product .icons svg {
    fill: inherit;
    display: block;
    width: 20px;
}



/* ------- custom toggle ------------ */
.product .fav input {
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    opacity: 0;
}

.product .fav .checked {
    display: none;
}

.product .fav input:checked~.checked {
    display: block;
}

.product .fav input:checked~.un-checked {
    display: none;
}</style>