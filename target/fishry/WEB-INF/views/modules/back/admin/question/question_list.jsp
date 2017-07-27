<%@ page contentType="text/html" pageEncoding="GBK"%>
<%@ page import="com.fishskills.question.domain.*" %>
<%@ page import="java.util.*" %>
<html>
<head><title>显示端</title>
<style type="text/css">
<!--
.STYLE6 {font-size: 12px}
.STYLE10 {font-size: 14px; font-weight: bold; }
-->
</style>
</head>
	<script language="javascript">
		function changeColor(obj,color){
			obj.bgColor = color ;
		}
		function showMgr(thisurl){
			window.open(thisurl,"综合项目","widht=500,height=370,scrollbars=yes,resizeable=no") ;
		}
	</script>
	
<body>
<%!
	public static final String URL = "QuestionServlet" ;
%>
<%
	long allRecorders = (Long) request.getAttribute("allRecorders") ;
	int currentPage = (Integer) request.getAttribute("currentPage") ;
	int lineSize = (Integer) request.getAttribute("lineSize") ;
	List<Question> all = (List<Question>) request.getAttribute("all") ;
	if(all != null) {
%>
<center>
	<h1>问题汇总</h1>
<jsp:include page="split_page_plugin">
	<jsp:param name="allRecorders" value="<%=allRecorders%>"/>
	<jsp:param name="url" value="<%=URL%>"/>
	<jsp:param name="status" value="questionlist"/>
</jsp:include>
<TABLE BORDER="1" cellpadding="5" cellspacing="0" bgcolor="F2F2F2" width="100%">
	<TR onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td align="center" valign="middle"><span class="STYLE10">姓名</span></td>
		<td align="center" valign="middle"><span class="STYLE10">手机</span></td>
		<td align="center" valign="middle"><span class="STYLE10">邮箱</span></td>
		<td align="center" valign="middle"><span class="STYLE10">主题</span></td>
		<td align="center" valign="middle"><span class="STYLE10">内容</span></td>
		<td align="center" valign="middle"><span class="STYLE10">回答</span></td>
		<td align="center" valign="middle" colspan="2"><span class="STYLE10">操作</span></td>
	</TR>
<%
	Iterator<Question> iter = all.iterator() ;
	while(iter.hasNext()){
		pageContext.setAttribute("question",iter.next()) ;
%>
	<TR onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td align="center" valign="middle"><span class="STYLE6">${question.name}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6">${question.phone}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6">${question.email}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6">${question.theme}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6">${question.details}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6">${question.flag==0?"未回答":question.answer}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6"><a href="QuestionServlet?questionid=${question.questionid}&cp=<%=currentPage%>&ls=<%=lineSize%>&pg=<%=URL%>&status=answerpre&temppid=2">回答问题</a></span></td>
		<td align="center" valign="middle"><span class="STYLE6"><a href="QuestionServlet?questionid=${question.questionid}&cp=<%=currentPage%>&ls=<%=lineSize%>&pg=<%=URL%>&status=delete&type=questionlist&temppid=2">删除</a></span></td>
	</TR>
<%
	}
	}
%>
</table>
</center>
</body>
</html>