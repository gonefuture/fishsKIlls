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
    <script src="<c:url value='/static/vue/vue.js'/>"></script>
    <script src="<c:url value='/static/js/verifyCode.js'/>"></script>
</head>
<body>
<div class="container" id="box">
    <form role="form" action="/fishskills/admin/login" method="post">
        <div>
            <div class="form-group">
                <label for="adminid">账号名：</label>
                <input type="text" id="adminid" name="adminid" class="form-control" placeholder="输入账号密" v-model="adminid"/>
            </div>
            <div class="form-group">
                <label for="password">密码：</label>
                <input type="password" id="password" name="password" class="form-control" placeholder="输入密码" v-model="password"/>
            </div>
            <div class="form-group">
                <label for="imgVerifyCode">验证码: </label>
                <input type="text" name="verifyCode" class="form-control" placeholder="输入验证码" ><br>
                <img src="<c:url value='/tools/VerifyCodeServlet'/>" id="imgVerifyCode" v-model="verifyCode"  class="img-thumbnail"/>
                <button class="btn btn-danger btn-sm" :click="flash" >刷新验证码</button>
            </div>
            <div  class="text-center" >
                <input type="submit" value="登录" class="btn btn-primary btn-lg" />
                <input type="button" value="重置" class="btn btn-danger btn-lg"/>
            </div>
        </div>
    </form>
</div>
</body>
</html>
