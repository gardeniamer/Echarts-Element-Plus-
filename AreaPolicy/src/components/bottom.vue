<script  setup lang="ts">
import { MyRequest } from '@/untils/MyRequest';
import * as echarts from 'echarts';
import { onMounted, ref, watchEffect } from 'vue';

const main = ref()
const title = ref("生产与流通指标")

const props = defineProps({
    region: {
        type: String,
        default: "太原"
    },
    tag_two: {
        type: String,
        default: "生产与流通指标"
    }
})

watchEffect(() => {
    title.value = props.tag_two
    changeData()
})

let option: any = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,//代表显示所有x轴标签显示
                rotate: 45
            }

        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            barWidth: '60%',
            barCategoryGap: '40%',
            data: []
        }
    ]
};

function changeData() {
    (async () => {
        const trial = await MyRequest({
            method: "POST",
            url: "getRegion/tag_three",
            params: {
                region: props.region,
                tag_two: props.tag_two
            }
        })
        console.log(trial.data.data);
        option.xAxis[0].data = []
        option.series[0].data = []
        trial.data.data.forEach((item: any) => {
            option.xAxis[0].data.push(item.name)
        })
        trial.data.data.forEach((item: any) => {
            option.series[0].data.push(item.score)
        })
        init()
    })();
}

function init() {
    var myChart = echarts.init(main.value);
    option && myChart.setOption(option);
}



</script>

<template>

    <div class="bottom">
        <div class="word">{{ title }}</div>
        <div class="thirdIndicate" ref="main">

        </div>
    </div>

</template>

<style scoped>

.bottom {
    width: 100%;
    height: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
}

.word {
    font-size: 18px;
    font-weight: bold;
    transform: translateY(10px);
}

.thirdIndicate {
    width: 100%;
    height: 100%;
    margin: 20px;
    border-radius: 10px;
}
</style>