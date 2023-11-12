<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'
import { ref } from 'vue';

const fileList = ref<UploadUserFile[]>([
    {
        name: 'element-plus-logo.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
        name: 'element-plus-logo2.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
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
</script>

<template>
    <div class="left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" highlight-current accordion />
        <div class="btns">

            <el-upload  class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :on-preview="handlePreview"
                :on-remove="handleRemove" :before-remove="beforeRemove" :limit="1" :on-exceed="handleExceed">
                <el-button type="primary">Click to upload</el-button>
            </el-upload>

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
    text-align: center;
}

.upload-demo {
    transform: translateY(100px);
}
</style>