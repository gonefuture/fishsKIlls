var tp = 4;
var page = 1;
const findfastInfoPath = " /fishskills/news?method=QueryNews&ps=10&dic=1111";
function findFastInfoList(p){
clearTable();
   $.ajax({
		 type:"get",
		 url:findfastInfoPath,                                  
		 dataType : "json",
         data:{"pc":p},
		 success : function(data, textStatus){
			var list = eval(data).list;
			tp = data.tp;
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
					$(".rightTable table").append("<tr><td ></td><td></td><td ></td></tr><tr ><td ></td><td ></td><td ></td></tr>");
					
                $(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
				"<a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank' title='"+title+"'>"+title+" </a>"+
				"</td><td></td><td class='color-oran'>"+date+"</td>"+
				"</tr>");
                   
				}
			 setPage();  
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("信息快讯数据传输失败！！抱歉");
		   }
});
   
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
    {
		findFastInfoList(pn);
		page = pn;
	}
	else
		alert("请输入正确页码");
	$("#jeepPage").val("");
	setPage();
}
function setPage(){

    $(".pageDiv #nowP").text("第"+page+"页");
	$(".pageDiv #tp").text("第"+tp+"页");
}

$(document).ready(function(){
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	
});
