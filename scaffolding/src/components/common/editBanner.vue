<template>
    <div @click="bannerClick">
        <div class="editbanner">
            <span>{{left}}</span>
            <span><slot name="right"></slot></span>
        </div>
    </div>
</template>
<script>
export default {
    props:['left'],
    methods:{
        bannerClick(){
            this.$emit('bannerClick')
        }
    }   
}
</script>
<style>
    .editbanner{
        background-color: white;
        border-bottom: 1px solid #fafafa;
        padding: 15px 10px;
        font-size: 14px;
        color: #999;
        display: flex;
        justify-content: space-between;
    }
</style>
