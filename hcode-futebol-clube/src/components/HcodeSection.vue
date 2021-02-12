<template>
    <div>

        <div class="row mt-5">
            <h3>Você está vendo noicias do Campeonato Brasileiro</h3>
        </div>

        <hcode-section-banner />
        <hcode-section-news />
    </div>
</template>
<script>
import HcodeSectionBanner from "./HcodeSection/HcodeSectionBanner";
import HcodeSectionNews from "./HcodeSection/HcodeSectionNews";

export default {
    components: {
        HcodeSectionBanner,
        HcodeSectionNews,
    },
};
</script>
<style scoped>
</style>