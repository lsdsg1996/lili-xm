<template>
    <div class="navbar">
        <div class="logo">
            <img src="@/assets/toplogo.png" alt="">
        </div>
        <div>
            <p>
            请输入内容
            <van-icon name="search" class="ipt-icon"/>
            </p>
        </div>
        <div>
            <img :src="imgUrl" alt="" @click="imgClick">
            <p>下载app</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl:'moren.png'
        }
    },
     async mounted(){
         const res = await this.axios.get('/user/user?cid=' + JSON.parse(localStorage.getItem('id'))).then(res=>{
             this.imgUrl=res.data.result[0].user_img;
            //  console.log(res.data.result[0])
         })
      },
      methods:{
          imgClick(){
              this.$router.push('/edit')
          }
      }
}
</script>
<style lang="less">
    .navbar{
        height: 60px;
        background-color: white;
        display: flex;
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 110px;
            img{
                margin-bottom: 10px;
                width: 100%;
                height: 100%;
            }
        }
        div:nth-child(2){
            flex: 1;
            display: flex;
            align-items: center;
            margin: 0 5px;
            p{
                background-color:#f4f4f4;
                width: 100%;
                height: 26px;
                font-size: 12px;
                line-height: 26px;
                border-radius:13px; 
                position: relative;
                color: #aaa;
                padding-left: 25px;
                .ipt-icon{
                    position: absolute;
                    left: 10px;
                    top:50%;
                    transform: translate(0,-50%);
                    color: #aaa;
                }
            }
        }
        div:nth-child(3){
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
            }
        }
        p{
            padding: 0 10px;
            margin: 0 8px;
            background-color:#fb7299;
            color: white;
            border-radius: 3px;
            font-size: 16px;
        }
    }
</style>    
