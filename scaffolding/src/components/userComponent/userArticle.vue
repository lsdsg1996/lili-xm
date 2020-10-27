<template>
    <div class="article">
        <div>{{playname}}</div>
        <div>{{videoname}}</div>
    </div>
</template>
<script>
export default {
    props:['playname','videoname']
}
</script>
<style scoped lang="less">
    .article{
        height: 48px;
        background-color: white;
        display: flex;
        align-items: center;
        >div{
            color: #777;
            cursor: pointer;
        }
       >div:nth-child(1){
           padding: 0 10px;
           
       }
    }
</style>
