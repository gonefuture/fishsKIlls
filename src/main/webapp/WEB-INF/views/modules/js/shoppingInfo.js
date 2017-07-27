const findNeedInfoPath = "/fishskills/Info?method=showInformation&dictionaryid=1712";
findFastInfoList(1);
function findFastInfoList(p){
  
clearTable();
  $(".rightTable table").empty();
	$.ajax({
		 type:"get",
		 url:findNeedInfoPath,                                  
		 dataType : "json",
		 data:{"pageNum":p},
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].date;  
				var date = d.substr(0,10);
				$(".rightTable table").append("<tr><td style='color:green'>&#9830[求购信息]</td><td><a href='detail_needInfo.html?informationid="+list[i].informationid+" 'target='blank'>"+list[i].informationname+" </a></td> <td class='color-oran'>["+date+"]</td></tr>");
			} 
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("供求信息数据传输失败！！抱歉");break;
             }
			 
		   }
});
    setPage();  
}
function clearTable(){

    $(".rightTable table ").empty();

}
function nextPage(){
    var pn = ++page;
    if(pn<=tp)
    findFastInfoList(pn);
	if(page>=tp)
		page=tp;
}
function forePage(){
    var pn = --page;
    if(pn>=1)
    findFastInfoList(pn);
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    findFastInfoList(pn);
	else
		alert("请输入正确页码");
}
function setPage(){

    $(".pageDiv #nowP").text("第"+page+"页");
	$(".pageDiv #tp").text("第"+tp+"页");
}
var tp = 2;
var page = 1;
$(document).ready(function(){
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	
});
