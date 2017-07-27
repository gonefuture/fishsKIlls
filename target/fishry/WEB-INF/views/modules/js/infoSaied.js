const findInfoSaiedPath = "/fishskills/news?method=QueryNews&ps=10&dic=1400";
const findfastInfoPath = " /fishskills/news?method=QueryNews&ps=7&dic=1111";
var tp = 4; //总页数
var page = 1;//当前页
findInfoSaiedList(1);
findFastInfoList();
console.log(tp,page);
function findInfoSaiedList(p){ //获取通知公告信息
clearTable();
   $.ajax({
		 type:"get",
		 url:findInfoSaiedPath,  
         data:{"pc":p},                                
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			tp = data.tp;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					{title = title.substr(0,25)+"...";}
				else 
					{title = title.substr(0);}
				if(i>0&&i%4==0)	
					$(".rightTable table").append("<tr><td ></td><td></td><td ></td></tr><tr ><td s></td><td ></td><td ></td></tr>");
					
                $(".rightTable table").append("<tr><td class='color-oran'>&#9830</td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank' title='"+title+"'>"+title+" </a></td><td class='color-oran'>"+date+"</td></tr>");
                   
				}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("通知公告数据传输失败！！抱歉");
		   }
});
    setPage();  
}

function findFastInfoList(){
  
   $.ajax({
		 type:"get",
		 url:findfastInfoPath,                                  
		 dataType : "json",
         data:{"pc":"1"},
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>18)
					{title = title.substr(0,18)+"...";}
				else 
					{title = title.substr(0);}
                
                $(".leftMoney ul").append("<li><a href='detail_fastInfo.html?nid="+list[i].nid+"' title='"+title+"' target='_blank'>"+title+"</a></li>")
                   
				}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("本地快讯数据传输失败！！抱歉");
		   }
});
    
}

function clearTable(){

    $(".rightTable table ").empty();

}
function nextPage(){
    var pn = ++page;
    if(pn<=tp)
    findInfoSaiedList(pn);
	if(page>=tp)
		page=tp;
}
function forePage(){
    var pn = --page;
    if(pn>=1)
    findInfoSaiedList(pn);
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    findInfoSaiedList(pn);
	else
		alert("请输入正确页码");
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
