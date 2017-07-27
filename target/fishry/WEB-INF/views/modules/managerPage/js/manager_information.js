var tp = 4;
var page = 1;
var optionChange = 1711;
function findFastInfoList(p,dic){
clearTable();
var myType;
if(dic == 1712)
	myType = "<td class='color-gree'>&#9830[求购信息]</td>";
else
	myType = "<td class='color-oran'>&#9830[供应信息]</td>";

   $.ajax({
		 type:"get",
		 url:"/fishskills/Info?method=showInformation",                                
		 dataType : "json",
         data:{"pageNum":p,"dictionaryid":dic},
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].date;  
				var date = d.substr(0,10);
				$(".rightTable table").append("<tr>"+myType+""+
				"<td><a href='../detail_needInfo.html?informationid="+list[i].informationid+" 'target='blank'>"+list[i].informationname+" </a></td>"+ 
				"<td class='color-oran'>["+date+"]</td>"+
				"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].informationid+"'>删除</button></td>"+
				"<td><button class='btn gray'style='width:50px;height:28px'id='u"+optionChange+list[i].informationid+"'>修改</button></td>"
				+"</tr>");
			} 
			setPage();  
			setPath();
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("供求信息模块数据传输失败！！抱歉");
		   }
});
    
}
function addInfos(){
	window.location.href="manager_information_i.html";
}
function deleted(i){
	if(confirm("确认删除该条信息吗？")){
	$.ajax({
			
			 type:"get",
			 url:"/fishskills/back/Info?method=deleteInformation",
			 data : {"informationid":i}, 
			 dataType:"json",                                 
			 success : function(data, textStatus) {
				alert("删除成功");
				findFastInfoList(page,optionChange);
				
               },
			 error : function(xhr, status, errMsg) {
				 alert("删除失败！！抱歉");
			   }
	 });
	 }
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();

}
function nextPage(){

    var pn = ++page;
    if(pn<=tp)
    findFastInfoList(pn,optionChange);
	if(page>=tp)
		page=tp;

}
function forePage(){
    var pn = --page;
    if(pn>=1)
    findFastInfoList(pn,optionChange);
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    {
		findFastInfoList(pn,optionChange);
		page = pn;
	}
	else
		alert("请输入正确页码");
	$("#jeepPage").val("");
	setPage();
}
function setPage(){
	var p ;
	if(tp==0)
		p = 0;
	else
		p = page;
    $(".pageDiv #nowP").text("第"+p+"页/");
	$(".pageDiv #tp").text("共"+tp+"页");

}
function setPath(){
	optionChange = $(":selected").val();
	$("#path2").text("");
	switch (optionChange) {
		case '1711':$("#path2").text("供应信息");break;
		case '1712':$("#path2").text("求购信息");break;
		
	}
}
function checkOption(){
	optionChange = $(":selected").val();
	findFastInfoList(page,optionChange);
}

$(document).ready(function(){
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	$(".rightTable table").on("click","[id*='de']",function(){
		var i = $(this).attr('id');
		var id = i.substr(2);
		deleted(id);
	});
	$(".rightTable table").on("click","[id*='u']",function(){
		var i = $(this).attr('id');
		var id = i.substr(1);
		window.location.href="manager_information_u.html?nid="+id;
	});
});
