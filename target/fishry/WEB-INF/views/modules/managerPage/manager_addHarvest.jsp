<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>添加新闻</title>
<link rel="stylesheet" href="../css/index.css">
<link rel="stylesheet" href="../css/color.css">
<link rel="stylesheet" href="../css/detail_fastInfo.css">
<link rel="stylesheet" href="../css/form.css">
</head>
<body  >
<div class="content">
<div class="logo">
    <div class="myIcon"><span class="login1"><span class="login2"></span></span></div>
    <h2>我们的渔技网</h2>
    <h3>www.zhkugg.com</h3>
</div>
<div class="handler">
    <ul>
        <li><a href="index.html">网站首页</a></li>
        <li><a href="#">广州渔业</a></li>
        <li><a href="#">政务公开</a></li>
        <li><a href="fastInfo_local.html">信息快递</a></li>
        <li><a href="infoSaied.html">通知公告</a></li>
        <li><a href="money.html">水产行情</a></li>
        <li><a href="netInfo.html">站务信息</a></li>
        <li><a href="needInfo.html">供求信息</a></li>
        <li><a href="tech_breed.html">科技推广</a></li>
        <li><a href="#">病防质检</a></li>
        <li><a href="#">渔乐天堂</a></li>
        <li><a href="#">休闲渔业</a></li>
    </ul>
</div>
<div class="find" style="padding:15px 20px; color:#0074c4">
    <span>当前位置：</span>
    <a href="manager_money.html">后台&gt</a>
    <a href="manager_netInfo.html">站务信息管理&gt</a>
    <a href="">新增水产简报</a>
</div>
<div class="newsFields" style="padding:30px 50px;border:1px solid #f0f0f0">

    <form action="/fishskills/back/Down?method=addDown" method="post" enctype="multipart/form-data">
        
        <div class="inputGroup">
            <span>标题:</span><input type="text" placeholder="标题" name="name">
        </div>
        <div class="inputGroup">
           <span> 来源:</span><input type="text" placeholder="来源" name="downloadsource">
        </div>
        <div class="inputGroup">
            <span>文件:</span><input type="file"  name="pic" >
       </div>
        <div class="inputGroup">
            <span>管理员编号:</span><input type="text" placeholder="作者" name="adminid">
        </div>
	 
        <div class="inputGroup">
            <span >日期:</span><input type="date"  name="date" >
        </div>
        <div class="inputGroup">
           <button class="btn duck" style="width:50px;height:28px;margin-left:2%;" type="submit">确认</button>
           <button class="btn gray" style="width:50px;height:28px;margin-left:2%;" type="reset">取消</button>
        </div>
    </form>
</div>
<div class="foot"><a href="#">关于我们</a><a href="#">后台登陆</a></div>
<h5 style="color:#333;margin-top:20px;float:left;margin-left:46.5%">--版权&reg叶超小分队--</h5>
</div>
<input type="text" style="display:none" id="tips" value="${ msg}">
</body>
<script src="https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="../js/prefixfree.min.js" ></script>
<script>
	$(document).ready(function(){
		if($("#tips").val()){
			alert($("#tips").val());
		}
	});
</script>
</html>