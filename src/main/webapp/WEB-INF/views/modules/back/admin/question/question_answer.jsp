<%@ page contentType="text/html" pageEncoding="GBK"%>
<%@ page import="java.util.*"%>
<html>
<head><title></title></head>
<body>
<%	// ������
	request.setCharacterEncoding("GBK") ;
%>
<form action="QuestionServlet" method="post" >
<table border="1" width="100%" cellpadding="5" cellspacing="0" bgcolor="F2F2F2">
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<h1>��ѯ</h1>		</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp;&nbsp;����</font></td>
		<td>${question.name}</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��ϵ�绰��</font></td>
		<td>${question.phone}</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp;&nbsp;�䣺</font></td>
		<td>${question.email}&nbsp;</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp; �⣺</font></td>
		<td>${question.theme}</td>
	</tr>	
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">�������ݣ�</font></td>
		<td>${question.details}</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp;&nbsp;��</font></td>
		<td><textarea name="answer" >${question.answer}</textarea></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<input type="hidden" name="status" value="answer">
			<input type="hidden" name="type" value="questionlist">
			<input type="hidden" name="questionid" value="${question.questionid}">
			<input type="hidden" name="cp" value="${param.cp}">
			<input type="hidden" name="ls" value="${param.ls}">
			<input type="hidden" name="pg" value="${param.pg}">
			<input type="hidden" name="temppid" value="2">
			<input type="submit" value="�ύ">
			<input type="reset" value="����">		</td>
	</tr>
</table>
</form>
</body>
</html>