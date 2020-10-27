<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginbtn">{{btntext}}</div>
    </div>
</template>
<script>
export default {
    // 接受父组件给子组件的值
    props:['btntext'],
    methods:{
        registerClick(){
            // 子组件给父组件传值
            this.$emit('registerSubmit')
        }
    }
}
</script>
<style>
    .btnparent{
        padding: 15px 10px;
    }
    .loginbtn{
        height: 45px;
        background-color: #ff9db5;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22.5px;
        font-size: 16px;
    }
</style>
