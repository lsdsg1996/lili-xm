const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//1.用户注册(post /reg)
r.post('/register',(req,res)=>{
  //1.1获取post请求的数据
  let username=req.body.username;
  let password=req.body.password;
  let sql='SELECT uid FROM xm_user WHERE username=?'
  //1.3执行SQL命令
  pool.query(sql,[username],(err,result)=>{
    if(err) throw err;
	if(result.length==0){
		sql='INSERT xm_user(username,password) VALUES(?,MD5(?))';
		pool.query(sql,[username,password],(err,result)=>{
			if(err) throw err;
			res.send({msg:'注册成功',code:1});
		})
	}else{
			res.send({msg:'用户名已被注册',code:0})
		}
  });
});
//2.用户登录(post /login)
r.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //2.2验证是否为空
  if(!obj.username){
    res.send({code:401,msg:'username required'});
	return;
  }
  if(!obj.password){
    res.send({code:402,msg:'password required'});
	return;
  }
  //2.3执行SQL命令
  pool.query('SELECT * FROM xm_user WHERE username=? AND password=?',[obj.username,obj.password],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//结果为数组，如果数组长度为0说明登录失败，否则登录成功
    if(result.length===0){
	  res.send({code:301,msg:'用户名或密码错误'});
	}else{
	  res.send({id:`${result[0].uid}`,code:200,msg:'登陆成功',model:result[0]});
	}
  }); 
});
//
r.get('/user',(req,res)=>{
	let cid=req.query.cid;
	let sql='SELECT uid,name,gender,username,gamename,user_text,user_img FROM xm_user WHERE uid=?';
	pool.query(sql,[cid],(err,result)=>{
		if(err) throw err;
		res.send({meg:'查询成功',code:1,result:result})
	})
})
//
r.post('/upload',(req,res)=>{
	//获取数据
	let obj=req.body;
	console.log(obj);
	pool.query('UPDATE xm_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows===0){
			res.send({code:200,msg:'修改成功'})
		}else{
			res.send({code:302,msg:'修改失败'})
		}
	})
})
/*//3.修改用户(get /update)
r.get('/update',(req,res)=>{
  //3.1获取数据
  let obj=req.query;
  console.log(obj);
  //3.2使用循环验证是否为空
  //遍历对象的属性
  let i=400;
  for(let key in obj){
	//每循环1次加1
	i++;
    //key 每个属性名  obj[key]  属性名对应的属性值
	//console.log(key,obj[key]);
	//如果属性值为空，则响应该属性不能为空
	if(!obj[key]){
	  res.send({code:i,msg:key+' requried'});
	  return;
	}
  }
  //3.3执行SQL命令
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//result为对象，如果对象下的属性affectedRows的值为0说明修改失败，否则修改成功
	if(result.affectedRows===0){
	  res.send({code:301,msg:'update err'});
	}else{
	  res.send({code:200,msg:'update suc'});
	}
  });
});
//4.用户列表(get /list)
r.get('/list',(req,res)=>{
  //4.1获取查询字符串传递的数据
  let obj=req.query;
  console.log(obj);
  //4.2验证是否为空
  //如果页码为空，或者小于1，则页码为1
  if(!obj.pno || obj.pno<1){
    obj.pno=1;
  }
  //如果每页大小为空，或者小于1，则大小为2
  if(!obj.count || obj.count<1){
    obj.count=2;
  }
  console.log(obj);
  //将每页大小和当前页码转为整型
  let c=parseInt(obj.count);//每页大小
  let p=parseInt(obj.pno);//当前页码
  //计算开始查询的值
  let start=(p-1)*c;
  //执行SQL命令
  pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,c],(err,result)=>{
    if(err) throw err;
	console.log(result);
    //查询到的是数组，把数组响应给浏览器端
    res.send(result);
  });
});*/
//导出路由器对象
module.exports=r;