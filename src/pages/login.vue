<template>
    <el-row>
        <el-col :span="16" class="flex justify-center items-center min-h-screen bg-purple-600">
            <div>
                <div class=" text-5xl text-light-50 font-bold mb-10">欢迎光临</div>
                <div class=" text-gray-400">此站点是演示地址，<span class="text-light-200 font-bold">点击立即学习</span></div>
            </div>
        </el-col>
        <el-col :span="8" class="flex justify-center items-center min-h-screen flex-col bg-light-200">
            <div class=" text-3xl mb-4 font-bold">欢迎回来</div>
            <div class="mb-4">
                <span class="text-gray-200 mr-2">—————</span>
                <span class="text-gray-300 font-bold text-1xl">账号密码登录</span>
                <span class="text-gray-200 ml-2">—————</span>
            </div>
            <el-form :model="form" class=" w-[250px]">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码" />
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
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: "",
    password: ""
})

const onSubmit = () => {
    console.log('submit!')
}
</script>