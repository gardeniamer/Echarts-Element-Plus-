<script setup lang="ts">
import { ref } from "vue";
import { MyRequest } from "./untils/MyRequest"
import showRegion from "./components/showRegion.vue";
import firstIndication from "./components/firstIndication.vue"


// (async () => {
//     const trial = await MyRequest({
//         method: "POST",
//         url: "getRegion/getRegionList",
//     })
//     console.log(trial);
// })();

// async function Region() {
//     const Region = await MyRequest({
//         method: "POST",
//         url: "getRegion/getRegionList",
//     })
//     console.log(Region.data.data);
//     Region.data.data.forEach((item: string) => {
//         if (item != "基准" && item != "中国") {
//             const struct: any = { label: item, }
//             labelList(item).then((single) => {
//                 console.log(single);
//                 struct.children = []
//                 single.forEach((item: any) => {
//                     struct.children.push({ label: item.name })
//                 });
//             })
//             data[0].children.push(struct)
//         }

//     });
//     count.value++
    
// }

// Region();




// (async () => {
//     const trial = await MyRequest({
//         method: "POST",
//         url: "getRegion/tag_one",
//         params: { region: "太原" }
//     })
//     console.log(trial.data.data);
// })();

// async function labelList(region: string) {
//     const trial = await MyRequest({
//         method: "POST",
//         url: "getRegion/getLabelList",
//         params: {
//             region: region,
//             // tag_one: "经济指标"
//         }
//     })
//     return trial.data.data
// }

// (async () => {
//     const trial = await MyRequest({
//         method: "POST",
//         url: "getRegion/tag_two_list",
//         params: {
//             region: "太原",
//             // tag_one: "经济指标"
//         }
//     })
//     console.log(trial);
// })();


</script>

<template>
    <div class="top">山西区域现代化</div>
    <div class="main">
        <div class="mainInner">

            <showRegion></showRegion>
            
            <firstIndication></firstIndication>           

        </div>
    </div>
</template>

<style scoped>
.top {
    width: 100%;
    height: 100px;
    /* background-color: red; */
    text-align: center;
    line-height: 100px;
    font-size: 38px;
    font-weight: bold;
}

.main {
    margin: 0 auto;
    width: 90%;
    height: 1000px;
    background-color: #F5F5F5;
    border-top: 1px solid transparent;
}

.mainInner {
    margin: 50px auto;
    width: 80%;
    height: 900px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}



</style>
