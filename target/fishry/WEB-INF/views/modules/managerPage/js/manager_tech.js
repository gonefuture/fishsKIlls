var tp = 4;
var page = 1;
var optionChange = 1811;
function findFastInfoList(p,dic){
clearTable();
   $.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&ps=10",                                
		 dataType : "json",
         data:{"pc":p,"dic":dic},
		 success : function(data, textStatus){
			var list = eval(data).list;
			tp = data.tp;
			console.log(tp);
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>30)
					{title = title.substr(0,30)+"...";}
				else 
					{title = title.substr(0);}
				if(i>0&&i%4==0)	
					$(".rightTable table").append("<tr><td ></td><td></td><td ></td></tr><tr ><td ></td><td ></td><td ></td><td ></td></tr>");
					
                $(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
				"<a href='../detail_fastInfo.html?nid="+list[i].nid+" 'target='blank' title='"+title+"'>"+title+" </a>"+
				"</td><td class='color-oran'>"+date+"</td>"+
				"<td><button class='btn red'style='width:50px;height:28px' id='de"+list[i].nid+"'>删除</button></td>"+
				"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].nid+"'>修改</button></td>"+
				"</tr>");
                   
				}
			setPage();  
			setPath();
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("信息快讯模块数据传输失败！！抱歉");
		   }
});
    
}

function deleted(i){
	if(confirm("确认删除该条信息吗？")){
	$.ajax({
			
			 type:"get",
			 url:"/fishskills/back/news?method=deleteNew",
			 data : {"nid":i}, 
			 dataType:"json",                                 
			 success : function(data, textStatus) {
				alert(data.msg);
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
		case '1811':$("#path2").text("养殖技术");break;
		case '1812':$("#path2").text("水产饲料");break;
		case '1813':$("#path2").text("捕捞与运输技术");break;
		case '1814':$("#path2").text("加工技术");break;
		case '1815':$("#path2").text("水质调控技术");break;
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
});
