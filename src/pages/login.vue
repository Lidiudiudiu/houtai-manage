<template>
    <el-row class="min-h-screen transition-all">
        <el-col :lg="16" :md="12" class="flex justify-center items-center bg-purple-600">
            <div>
                <div class=" text-5xl text-light-50 font-bold mb-10">欢迎光临</div>
                <div class=" text-gray-400">此站点是演示地址，<span class="text-light-200 font-bold">点击立即学习</span></div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="flex justify-center items-center  flex-col bg-light-200">
            <div class=" text-3xl mb-4 font-bold">欢迎回来</div>
            <div class="mb-4">
                <span class="text-gray-200 mr-2">—————</span>
                <span class="text-gray-300 font-bold text-1xl">账号密码登录</span>
                <span class="text-gray-200 ml-2">—————</span>
            </div>
            <el-form ref="formRef" :model="form" :rules="rules" class=" w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round type="primary" @click="onSubmit"
                        class="w-[250px] bg-purple-500 hover:bg-purple-400">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: "",
    password: ""
})



const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '用户名必须是3到5个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 12, message: '用户名必须是5到12个字符', trigger: 'blur' },
    ]
}


const formRef = ref(null)
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) return false;
        else console.log('验证通过')
    })
}
</script>