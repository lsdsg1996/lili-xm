<template>
    <div class="userdetails">
        <div>
            <div class="user_img">
                <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img">
                <img src="@/assets/user.png" alt="" v-else>
            </div>
            <div class="user_edit">
                <div>
                    <p>
                        <span>0</span>
                        <span class="user_text">粉丝</span>
                    </p>
                    <p>
                        <span>54</span>
                        <span class="user_text">关注</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span class="user_text">获赞</span>
                    </p>
                </div>
                <div @click="$router.push('/edit')">
                    <div class="user_editbtn" >编辑资料</div>
                </div>
            </div>
        </div>
        <div>
            <h2 v-if="userInfo.gamename">{{userInfo.gamename}}</h2>
            <h2 v-else>用户1</h2>
            <p v-if="userInfo.user_text">{{userInfo.user_text}}</p>
            <p v-else>这个人很懒，什么都没有留</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['userInfo']
}
</script>
<style scoped lang="less">
    .userdetails{
        background-color:white; 
        padding: 0 12px;
       >div:nth-child(1){
           display: flex;
           .user_img{
            margin-right: 20px;
            img{
                height: 85px;
                width: 85px;
                border-radius:50%; 
            }
        }
        .user_edit{
            flex: 1;
            div:nth-child(1){
                display: flex;
                p{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 13px;
                    .user_text{
                        color: #aaa;
                    }
                }
                p:nth-child(1),p:nth-child(2){
                    border-right:1px solid #ccc; 
                }
            }
            div:nth-child(2){
                .user_editbtn{
                    border:1px solid #fb7a9f; 
                    padding: 2px 10px;
                    color:#fb7a9f;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    border-radius:5px;  
                }
            }
        }
       }
        >div:nth-child(2){
            h2{
                margin: 10px 0 3px 0;
                font-weight: 400;
            }
            p{
                padding:5px 0;
                margin:5px 0;
                color: #aaa;
            }
        }
    }
</style>
