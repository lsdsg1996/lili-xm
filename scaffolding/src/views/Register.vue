<template>
    <div>
        <Login-Top middleTop="注册">
            <div slot="right" style="font-size:12px" @click="$router.push('/login')">切换到登陆</div>
        </Login-Top>
        <login-Text label="姓名" style="margin:15px 0" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => model.name = res"></login-Text>
        <!-- 用户名正则，4到16位（字母，数字，下划线，减号） -->
        <login-Text label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username = res"></login-Text>
        <!-- //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 -->
        <login-Text label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$" @inputChange="res => model.password = res"></login-Text>
        <login-Button btntext="注册" @registerSubmit="registerSubmit"></login-Button>
    </div>
</template>
<script>
// 传入子组件
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginButton from '@/components/common/LoginButton.vue'
import QS from 'qs'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            model:{
            name:'',
            username:'',
            password:''
            }
        }
    },
    components:{
        LoginTop,
        LoginText,
        LoginButton
    },
    methods:{
       async registerSubmit(){
            let rulg=/^.{6,16}$/
            if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
               const res = await this.axios.post('/user/register',QS.stringify(this.model))
               this.$msg.fail(res.data.msg);
               console.log(res)
            if(res.data.code==1){
               setTimeout(()=>{
                   this.$router.push('/login')
               })
               }
            }else{
                this.$msg.fail('格式不正确,请重新输入');
            }
        }
    }
}
</script>
