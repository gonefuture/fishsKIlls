<%@ page contentType="text/html" pageEncoding="GBK"%>
<%@ page import="java.util.*"%>
<html>
<head><title></title></head>
<body>
<form action="QuestionServlet" method="post" >
<table border="1" width="100%" cellpadding="5" cellspacing="0" bgcolor="F2F2F2">
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<h1>咨询</h1>		</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">姓&nbsp;&nbsp;&nbsp;&nbsp;名：</font></td>
		<td><input type="text" name="name" ></td>
		<td><span id="title_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">联系电话：</font></td>
		<td><input type="text" name="phone"  ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">邮&nbsp;&nbsp;&nbsp;箱：</font></td>
		<td><input type="text" name="email"  ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">主&nbsp;&nbsp;&nbsp; 题：</font></td>
		<td><input type="text" name="theme" ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>	
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">问题内容：</font></td>
		<td><textarea name="details" ></textarea></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<input type="hidden" name="status" value="insert">
			<input type="hidden" name="temppid" value="1">
			<input type="submit" value="提交">
			<input type="reset" value="重置">		</td>
	</tr>
</table>
</form>
</body>
</html>