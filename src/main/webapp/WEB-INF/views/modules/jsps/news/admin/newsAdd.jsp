<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/6/22
  Time: 21:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>用户登录</title>
    <link rel="stylesheet" href="<c:url value='/static/bootstrap/css/bootstrap.css'/>">
    <script src="<c:url value='/static/jquery/jquery.min.js'/>"></script>
    <script src="<c:url value='/static/bootstrap/js/bootstrap.js'/>"></script>
</head>
<body>
${status }
<div class="container" id="box">
    <form role="form" action="<c:url value='/NewsServlet?method=addNews'/>" method="post" enctype="multipart/form-data">
        <div>
            <div class="form-group">
                <label for="title">标题</label>
                <input type="text" name="title" id="title" class="form-control" placeholder="标题" />
            </div>
            
             <div class="form-group">
              <label for="content">内容</label>
               <textarea id="content" name="content" style="width:360px;height:200px;resize:none;"></textarea>
            </div>
           
            
            <div class="form-group">
                <label for="soucename">信息来源</label>
                <input id="soucename" type="text" name="soucename" class="form-control" placeholder="信息来源" />
            </div>
            
            <div class="form-group">
                <label for="pic">图片</label>
                <input id="pic" type="file" name="pic"  class="form-control" placeholder="输入密码" />
            </div>
            
            <div class="form-group">
                <label for="dictionaryid">分类</label>
                <input id="pic" type="text" name="dictionaryid" class="form-control" placeholder="分类" />
            </div>
            
            
            <div  class="text-center" >
                <input type="submit" value="post" class="btn btn-primary btn-lg" />
            </div>
        </div>
    </form>
</div>
</body>
</html>
