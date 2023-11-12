<script setup lang="ts">
import top from './top.vue';
import bottom from './bottom.vue';
import { ref } from 'vue';

const region = ref("太原")

const tag_two = ref("生产与流通指标")

function changedThird(params: any) {
    region.value = params.region
    tag_two.value = params.tag_two
}


</script>

<template>
    <div class="right">
        <top @changingThird="changedThird"></top>
        <bottom :region= region :tag_two= tag_two ></bottom>
    </div>
</template>

<style scoped>
.right {
    width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>