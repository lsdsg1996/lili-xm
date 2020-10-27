<template>
    <div class="userinfo">
        <nav-bar></nav-bar>
        <img src="@/assets/back.png" alt="" class="backImg">
        <user-details :userInfo="model"></user-details>
        <user-article playname="动态" videoname="视频"></user-article>
    </div>
</template>
<script>
import NavBar from '@/components/common/Navbar.vue'
import userDetails from '@/components/userComponent/userDetails.vue'
import userArticle from '@/components/userComponent/userArticle.vue'
export default {
    components:{
        NavBar,
        userDetails,
        userArticle
    },
    data(){
        return{
            model:{}
        }
    },
    methods:{
       async UserinfoData(){
           console.log(localStorage.getItem('id'))
           const res = await this.axios.get('/user/user?cid=' + JSON.parse(localStorage.getItem('id'))).then(res=>{
               this.model=res.data.result[0];
               console.log(this.model)
           })
               
            //console.log()
        }
    },
    created(){
        this.UserinfoData()
    }
}
</script>
<style lang="less">
    .userinfo{
        .backImg{
            height: 130px;
            width: 100%;
        }
    }
</style>
