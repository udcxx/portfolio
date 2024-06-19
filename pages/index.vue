<template>
    <section class="fv wrap" id="fv">
        <h2>udcxx.</h2>
    </section><!-- /fv -->

    <section class="about wrap" id="about">
        <SectionTitle eng='about'>udcxxについて</SectionTitle>
    </section><!-- /about -->
</template>

<style lang="scss" scoped>

.wrap {
    width: 100%; max-width: 1080px;
    margin: 0 auto;
}

.fv {
    width: 100%; height: 100vh;
    position: relative;
    
    h2 {
        margin: 0 auto;
        position: absolute;
        top: 50%; left: 0; right: 0;
        font-size: 40px;
    }
}

</style>