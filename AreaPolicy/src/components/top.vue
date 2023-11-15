<script  setup lang="ts">
import { MyRequest } from '@/untils/MyRequest';
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import secondIndication from './secondIndication.vue';
import { ArrowDown } from '@element-plus/icons-vue'
const main = ref(null)
const value: Array<Number> = []
let count = 0
const emits = defineEmits(['changingThird'])
// var chartDom = document.getElementById('main');
// var chartDom = main.value
onMounted(() => {
    init();

})

function init() {
    var myChart = echarts.init(main.value);
    var option: any;
    const color = ['rgba(0,191,255, 0.5)', 'rgba(255,165,0, 0.5)', 'rgba(255,69,0, 0.5)', 'rgba(255,192,203, 0.5)'];
    option = {
        color: color,
        legend: {},
        radar: [
            {
                indicator: [
                    { text: '经济指标' },
                    { text: '社会指标' },
                    { text: '政治指标' },
                    { text: '文化指标' },
                    { text: '环境指标' },
                    { text: '个人生活指标' },
                ],
                center: ['50%', '50%'],
                radius: 100,
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                axisName: {
                    formatter: '{value}',
                    color: '#000'
                },
                // splitArea: {
                //     areaStyle: {
                //         color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                //         shadowColor: 'rgba(0, 0, 0, 0.2)',
                //         shadowBlur: 10
                //     }
                // },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(211, 253, 250, 0.8)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(211, 253, 250, 0.8)',
                    }
                }
            },
        ],
        series: [
            {
                type: 'radar',
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                },
                data: [
                    {
                        value: [],
                        name: '太原',
                        areaStyle: {
                            color: 'rgba(0,191,255, 0.5)'
                        }
                    },
                    {
                        value: [],
                        name: '晋中',
                        areaStyle: {
                            color: 'rgba(255,165,0, 0.5)'
                        }

                    },
                    {
                        value: [],
                        name: '大同',
                        areaStyle: {
                            color: 'rgba(255,69,0, 0.5)'
                        }
                    },
                    {
                        value: [],
                        name: '阳泉',
                        areaStyle: {
                            color: 'rgba(255,192,203, 0.5)',
                        }
                    }
                ]
            },
        ]
    };
    option.series[0].data.forEach((item: any) => {
        const itemReal = item;
        (async () => {
            const trial = await MyRequest({
                method: "POST",
                url: "getRegion/tag_one",
                params: { region: itemReal.name }
            })

            trial.data.data.forEach((count: any) => {
                itemReal.value.push(count.score)
            })
            option && myChart.setOption(option);
        })();
    })
}

function changing2Third(params: object) {
    emits("changingThird", params)
}

</script>

<template>
    <div class="top">
        <div class="indicateOne">
            <div class="word">总视图</div>
            <div ref="main" class="main"></div>

        </div>
        <secondIndication @changingThird="changing2Third"></secondIndication>
    </div>

    <el-dropdown>
        <span class="el-dropdown-link">
            Dropdown List
            <!-- <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon> -->
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>



</template>

<style scoped>
.top {
    width: 96%;
    height: 48%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

}

.indicateOne {
    margin: 20px;
    width: 49%;
    height: 100%;
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
}

.main {
    width: 100%;
    height: 100%;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

:focus-visible {
    outline: none;
}

</style>