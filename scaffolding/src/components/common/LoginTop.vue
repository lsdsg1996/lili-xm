<template>
    <div>
        <div class="LoginTop">
            <div></div>
            <div>{{middleTop}}</div>
            <div>
                <slot name="right"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['middleTop']
}
</script>

<style lang="less">
    .LoginTop{
        height: 50px;
        background: white;
        display: flex;
        div{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
        }
    }
</style>
