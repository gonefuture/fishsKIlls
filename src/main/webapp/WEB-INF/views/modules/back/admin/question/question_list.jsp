<%@ page contentType="text/html" pageEncoding="GBK"%>
<%@ page import="com.fishskills.question.domain.*" %>
<%@ page import="java.util.*" %>
<html>
<head><title>��ʾ��</title>
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
			window.open(thisurl,"�ۺ���Ŀ","widht=500,height=370,scrollbars=yes,resizeable=no") ;
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
	<h1>�������</h1>
<jsp:include page="split_page_plugin">
	<jsp:param name="allRecorders" value="<%=allRecorders%>"/>
	<jsp:param name="url" value="<%=URL%>"/>
	<jsp:param name="status" value="questionlist"/>
</jsp:include>
<TABLE BORDER="1" cellpadding="5" cellspacing="0" bgcolor="F2F2F2" width="100%">
	<TR onMouseOver="changeColor(this,'white')" onMouseOut="changeColor(this,'F2F2F2')">
		<td align="center" valign="middle"><span class="STYLE10">����</span></td>
		<td align="center" valign="middle"><span class="STYLE10">�ֻ�</span></td>
		<td align="center" valign="middle"><span class="STYLE10">����</span></td>
		<td align="center" valign="middle"><span class="STYLE10">����</span></td>
		<td align="center" valign="middle"><span class="STYLE10">����</span></td>
		<td align="center" valign="middle"><span class="STYLE10">�ش�</span></td>
		<td align="center" valign="middle" colspan="2"><span class="STYLE10">����</span></td>
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
		<td align="center" valign="middle"><span class="STYLE6">${question.flag==0?"δ�ش�":question.answer}</span>&nbsp;</td>
		<td align="center" valign="middle"><span class="STYLE6"><a href="QuestionServlet?questionid=${question.questionid}&cp=<%=currentPage%>&ls=<%=lineSize%>&pg=<%=URL%>&status=answerpre&temppid=2">�ش�����</a></span></td>
		<td align="center" valign="middle"><span class="STYLE6"><a href="QuestionServlet?questionid=${question.questionid}&cp=<%=currentPage%>&ls=<%=lineSize%>&pg=<%=URL%>&status=delete&type=questionlist&temppid=2">ɾ��</a></span></td>
	</TR>
<%
	}
	}
%>
</table>
</center>
</body>
</html>