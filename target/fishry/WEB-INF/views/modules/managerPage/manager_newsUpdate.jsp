<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>供求详情</title>
<link rel="stylesheet" href="../css/index.css">
<link rel="stylesheet" href="../css/color.css">
<link rel="stylesheet" href="../css/detail_fastInfo.css">
<link rel="stylesheet" href="css/form.css">
</head>
<body  >
<div class="content">
<div class="logo">
    <div class="myIcon"><span class="login1"><span class="login2"></span></span></div>
    <h2>渔技网后台管理</h2>
    <h3>www.zhkuGGManager.com</h3>
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
    <a href="manager_money.html">后台&nbsp&gt</a>
    <a href="manager_information.html">新闻信息管理&nbsp&gt</a>
    <a href="">修改</a>
</div>
<div class="newsFields" style="padding:30px 50px;border:1px solid #f0f0f0;">
    <form action="/fishskills/back/news?method=editNews" method="post" enctype="multipart/form-data">
    <div class="inputGroup">
            <span>标题:</span><input type="text" placeholder="标题" id="title" name="title">
        </div>
        <div class="inputGroup">
           <span> 来源:</span><input type="text" placeholder="来源" id="souceName"  name="soucename">
        </div>
        <div class="inputGroup">
            <span>作者:</span><input type="text" placeholder="作者" id="adminid" name="adminid">
        </div>
        <div class="inputGroup">
            <span>图片:</span><input type="file"  id="pic" name="pic" >
        </div>
        <div class="inputGroup">
            <span >日期:</span><input type="text" placeholder="日期" id="date" ><input type="date" placeholder="日期" id="date" name="date">
        </div>
        <div class="inputGroup">
            <span style="margin-left:-70px;">审核:</span><span style="margin-left:22px;">是</span><input type="radio" value="1" name="lockflag" style="width:20px;margin-left:10px;">
            <span>否</span><input type="radio" value="0" name="lockflag" style="width:20px;margin-left:10px;">
        </div>
        <div class="inputGroup" >
            
                <img id="img" src="" alt="图片为空" style="width:50%;height:250px;border-radius:10px;"><br>
            	<span>图片名：</span><span id="img_name"></span>
        </div>
        <div class="inputGroup" >
            <span >内容:</span>
            <textarea id="content" name="content">
            
            </textarea>
        </div>
        <div class="inputGroup">
           <button class="btn duck" style="width:50px;height:28px;margin-left:2%;" type = "submit" >确认</button>
           <button class="btn gray" style="width:50px;height:28px;margin-left:2%;" type = "reset">取消</button>
        </div>
    </form>
</div>

<div class="foot"><a href="#">关于我们</a><a href="#">后台登陆</a></div>
<h5 style="color:#333;margin-top:20px;float:left;margin-left:46.5%">--版权&reg叶超小分队--</h5>
</div>
<input type="text" style="display:none" id="tips" >
</body>
<script src="https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/manager_newsUpdate.js"></script>
<script src="../js/prefixfree.min.js" ></script>
<script>
	$(document).ready(function(){
		if($("#tips").val()){
			alert($("#tips").val());
		}
	});
</script>
</html>



