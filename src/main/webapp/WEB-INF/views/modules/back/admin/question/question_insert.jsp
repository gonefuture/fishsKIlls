<%@ page contentType="text/html" pageEncoding="GBK"%>
<%@ page import="java.util.*"%>
<html>
<head><title></title></head>
<body>
<form action="QuestionServlet" method="post" >
<table border="1" width="100%" cellpadding="5" cellspacing="0" bgcolor="F2F2F2">
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<h1>��ѯ</h1>		</td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp;&nbsp;����</font></td>
		<td><input type="text" name="name" ></td>
		<td><span id="title_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��ϵ�绰��</font></td>
		<td><input type="text" name="phone"  ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp;�䣺</font></td>
		<td><input type="text" name="email"  ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">��&nbsp;&nbsp;&nbsp; �⣺</font></td>
		<td><input type="text" name="theme" ></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>	
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td><font size="2">�������ݣ�</font></td>
		<td><textarea name="details" ></textarea></td>
		<td><span id="author_msg"><font color="RED">*</font></span></td>
	</tr>
	<tr onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td colspan="4">
			<input type="hidden" name="status" value="insert">
			<input type="hidden" name="temppid" value="1">
			<input type="submit" value="�ύ">
			<input type="reset" value="����">		</td>
	</tr>
</table>
</form>
</body>
</html>