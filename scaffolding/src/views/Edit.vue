<template>
    <div class="editViews">
        <div style="margin-bottom:10px;"><nav-bar></nav-bar></div>
        <div class="uploadfile">
        <van-uploader class="uploadimg" preview-size="100vw" :after-read="afterRead" />
        <edit-banner left="头像">
            <img :src="model.user_img" alt="" slot="right" v-if="model.user_img">
            <img src="@/assets/user.png" alt="" slot="right" v-else>
        </edit-banner>
        </div>
        <edit-banner left="昵称" @bannerClick="show=true">
            <a href="javascirpt:;" slot="right">{{model.gamename}}</a>
        </edit-banner>
        <edit-banner left="账号">
            <a href="javascirpt:;" slot="right">{{model.username}}</a>
        </edit-banner>
        <edit-banner left="性别" @bannerClick="genderShow=true">
            <a href="javascirpt:;" slot="right">{{model.gender==1 ? '男':'女'}}</a>
        </edit-banner>
        <edit-banner left="个性签名" @bannerClick="textshow=true">
            <a href="javascirpt:;" slot="right">{{model.user_text}}</a>
        </edit-banner>
        <div class="editback" @click="$router.back()">返回个人中心</div>

        <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmClick" @cancel="content = ''">
            <van-field v-model="content" autofocus />
        </van-dialog>
        <van-dialog v-model="textshow" title="个性签名" show-cancel-button @confirm="textareaClick" @cancel="content = ''">
            <van-field v-model="content" type="textarea" autofocus />
        </van-dialog>
        
        <van-action-sheet v-model="genderShow" cancel-text="取消" :actions="actions" @select="onSelect" />
    </div>
</template>
<script>
import NavBar from '@/components/common/Navbar.vue' 
import editBanner from '@/components/common/editBanner.vue'
import QS from 'qs'
import { Uploader } from 'vant';
export default {
   components:{
       NavBar,
       editBanner
   },
   data(){
       return{
           model:{},
           show:false,
           textshow:false,
           genderShow:false,
           content:'',
           actions: [{ name: '男',val:1 },
                     { name: '女',val:0 }]
       }
   },
   methods:{
      async select(){
           console.log(localStorage.getItem('id'))
           const res = await this.axios.get('/user/user?cid=' + JSON.parse(localStorage.getItem('id'))).then(res=>{
               this.model=res.data.result[0];
               console.log(this.model)
           })
       },
       async afterRead(file){
           //创建一个新的空对象
           const formdata = new FormData()
           //通过append追加数据
           formdata.append('user_img',file.file)
           const res = await this.axios.post('/user/upload?cid=' + JSON.parse(localStorage.getItem('id')),formdata)
           console.log(res)
           this.model.user_img=res.data.user_img;
           this.UserUpdate();
           if(res.data.code==200){
                this.$msg.fail('修改成功')
           }
       },
       async UserUpdate(){
           const res = await this.axios.post('/user/upload?cid=' + JSON.parse(localStorage.getItem('id')),QS.stringify(this.model))
           console.log(res)
       },
       confirmClick(){
          this.model.gamename=this.content;
          this.UserUpdate();
          this.content='';
       },
       textareaClick(){
           this.model.user_text=this.content;
           this.UserUpdate();
           this.content='';
       },
       onSelect(data){
           this.model.gender = data.val;
           this.UserUpdate();
           this.genderShow = false;
       }
   },
   created(){
       this.select()
   }
}
</script>
<style lang="less" scoped>
    .editViews img{
        height: 46px;
        width: 46px;
        border-radius:50%; 
    }
    .editViews a{
        color: black;
    }
    .uploadfile{
        position: relative;
        overflow: hidden;
        .uploadimg{
            opacity: 0;
            position: absolute;
        }
    }
    .editback{
        background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        margin-top:20px; 
        padding: 15px 0;
        font-size: 14px; 
    }
</style>
