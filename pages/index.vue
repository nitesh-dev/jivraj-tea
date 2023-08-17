<script setup lang='ts'>

</script>
<template>
    <Head>
        <Title>Home</Title>
    </Head>
    <Header url="/"></Header>
    <HomeLanding></HomeLanding>
    <About :full="false"></About>
    <Products :row-count="1"></Products>
    <Testimonial></Testimonial>
    <Gallery :show-more="false"></Gallery>
    <Blogs :show-border="false"></Blogs>
    <ContactUs></ContactUs>
    <Footer></Footer>
</template>
<style scoped></style>