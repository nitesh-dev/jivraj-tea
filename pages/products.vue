<script setup lang='ts'>
</script>
<template>
    <Head>
        <Title>Products</Title>
    </Head>
    <Header url="products"></Header>
    <OtherLanding name="Products"></OtherLanding>
    <Products :row-count="3"></Products>
    <Testimonial></Testimonial>
    <Gallery :show-more="false"></Gallery>
    <Blogs :show-border="true"></Blogs>
    <ContactUs :another="false"></ContactUs>
    <Footer></Footer>
</template>
<style scoped></style>