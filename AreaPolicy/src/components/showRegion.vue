<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'
import { ref } from 'vue';

const word = ref("上传成功")

const open1 = () => {
    ElMessage(word.value)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

interface Tree {
    label: string
    children?: Tree[]
}

let data: Tree[] = [
    {
        label: '山西省',
        children: [
            {
                label: '太原',
            },
            {
                label: '晋中',
            },
            {
                label: '大同',
            },
            {
                label: '阳泉',
            },
        ],
    }
];

data[0].children?.forEach((a) => {
    a.children = [
        {
            label: '经济指标',
            children: [
                {
                    label: "生产与流通指标"
                },
                {
                    label: "分配与消费"
                }
            ]
        },
        {
            label: '社会指标',
            children: [
                {
                    label: "人口与卫生指标"
                },
                {
                    label: "学习与工作指标"
                },
                {
                    label: "休闲与福利指标"
                }
            ]
        },
        {
            label: '政治指标',
            children: [
                {
                    label: "政治参与指标"
                },
                {
                    label: "国家治理指标"
                },
                {
                    label: "公共安全指标"
                }
            ]
        },
        {
            label: '文化指标',
            children: [
                {
                    label: "文化生活指标"
                },
                {
                    label: "科技与创新指标"
                }
            ]
        },
        {
            label: '环境指标',
            children: [
                {
                    label: "生态环境指标"
                },
                {
                    label: "国际环境指标"
                }
            ]
        },
        {
            label: '个人生活指标',
            children: [
                {
                    label: "营养与健康指标"
                },
                {
                    label: "家庭与住房指标"
                },
                {
                    label: "生活模式指标"
                }
            ]
        },
    ]
})

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const defaultProps = {
    children: 'children',
    label: 'label',
}

const upLoadSuccess = (e:any) => {
    console.log(e);
    word.value = "上传成功"
    open1()
}

const upLoadFail = (e: any) => {
    word.value = "上传失败"
    open1()
}

</script>

<template>
    <div class="left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" highlight-current accordion />
        <div class="btns">

            <el-upload  class="upload-demo"
                action="/api/upload"  :limit="1" :on-exceed="handleExceed"  :on-success = "upLoadSuccess" :on-error = "upLoadFail" >
                <el-button type="primary">上传评价数据文件</el-button>
            </el-upload>

            <el-button type="primary">专家在线评价系统</el-button>

            <el-button type="primary" class="downLoad">下载评价模板文件</el-button>

        </div>
    </div>
</template>


<style scoped>
.left {
    width: 200px;
    height: 865px;
}

.el-tree {
    height: 70%;
    font-size: 14px;
    border-radius: 10px;
    padding: 10px;
    transform: translateY(-17.5px);
}

.btns {
    width: 100%;
    height: 30%;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.downLoad {
    transform: translateX(-5px);
}

</style>