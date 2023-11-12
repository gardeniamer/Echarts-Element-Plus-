<script setup lang="ts">
import { MyRequest } from '@/untils/MyRequest';
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
const main = ref(null)
const title = ref("")
let data = ref()
const emits = defineEmits(['changingThird'])
let option: any = {
    series: [
        {
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: []
        }
    ]
};

onMounted(() => {
    (async () => {
            const Region = await MyRequest({
            method: "POST",
            url: "getRegion/getRegionList",
            })
            data.value = []
            Region.data.data.forEach((item: any, index: string) => {
            if (item != "基准" && item != "中国") {
                
                data.value.push({ value: index,label: item})
            }
            });
            changeSecond(data.value[0].value);
        }
    )()

});

function init() {
    var myChart = echarts.init(main.value);
    option && myChart.setOption(option);
    myChart.on('click', function (params: any) {
        emits("changingThird", {region: title.value, tag_two: params.name })
    });
}

const value = ref()

function changeSecond(e:any) {
    console.log(e);
    let single = data.value[Number(e) - 1];
    title.value = single.label;
    (async () => {
        const trial = await MyRequest({
            method: "POST",
            url: "getRegion/tag_two_list",
            params: {
                region: single.label,
            }
        })
        option.series[0].data = []
        trial.data.data.forEach((item: any) => {
            option.series[0].data.push({ value: item.score, name: item.name })
        })
        init()
        emits("changingThird", { region: title.value, tag_two: "生产与流通指标" })
    })();
}

</script>

<template>
    <div class="indicateTwo">
        <div class="word">
            {{ title }} 
            <el-tree-select v-model="value" :data="data" :render-after-expand="false" class="select" size="small" @change = "changeSecond" placeholder = "太原"/>
        </div>
        <div ref="main" class="main" ></div>
    </div>
</template>

<style scoped>
.indicateTwo {
    margin: 20px;
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}

.word {
    font-size: 18px;
    font-weight: bold;
}

.main {
    width: 100%;
    height: 100%;
}

.select {
    position: absolute;
    top: 10%;
    left: 60%;
    width: 120px;
    text-align: center;
    font-size: 8px;
    z-index: 1;
}


</style>