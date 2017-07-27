<%@ page contentType="text/html" pageEncoding="utf-8"%>
<script language="javascript">
	alert("<%=request.getAttribute("msg")%>") ;
	window.location = "<%=request.getAttribute("url")%>" ;
</script>
