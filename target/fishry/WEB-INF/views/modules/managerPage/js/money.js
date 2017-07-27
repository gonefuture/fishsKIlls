const findMoneyListPath = " /fishskills/Fish?method=showFish";
const selectFishListPath = "/fishskills/Fish?method=selectFish";
const getAllPagePath = "/fishskills/Fish?method=allPage";
const deletePath = "/fishskills/back/Fish?method=deleteFish";//删除对应fid
const updatePath = "/fishskills/back/Fish?method=updateFish"//更新对应条目
getAllPage();
function findMoneyList(p){
  
clearTable();
    $.ajax({
			
			 type:"get",
			 url:findMoneyListPath,                                   
			 dataType : "json",
			 data : {"pageNum":p},
			 success : function(data, textStatus) {
				var list = eval(data);
				for(var i = 0 ;i<list.length;i++){
					var d = list[i].date;
					var date = d.substr(0,10);
					$(".rightTable table").append("<tr><td id='f"+list[i].fid+"'>"+list[i].fishname+"</td><td id='t"+list[i].fid+"'>"+list[i].type+"</td><td id='s"+list[i].fid+"'>"+list[i].size+"</td><td id='p"+list[i].fid+"'>"+list[i].price+"</td><td id='da"+list[i].fid+"'>"+date+"</td><td><button class='btn red'style='width:50px;height:28px' id='de"+list[i].fid+"'>删除</button></td><td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].fid+"'>修改</button></td></tr>");
				}
                //tp = list[i].totalPage;
               
			 	},
			 error : function(xhr, status, errMsg) {
				 alert("水产行情数据传输失败！！抱歉");
			   }
	 });
    
    setPage();
    
}
function selectFishList(n){ 
	
clearTable();
    $.ajax({
			
			 type:"get",
			 url:selectFishListPath,                                  
			 dataType : "json",
			 data : {"fishname":n},
			 success : function(data, textStatus) {
				var list = eval(data);
				var len = list.length;
				if(list.length>=20)
					len = 20;
				for(var i = 0 ;i<len;i++){
					var d = list[i].date;
					var date = d.substr(0,10);
					$(".rightTable table").append("<tr><td id='f"+list[i].fid+"'>"+list[i].fishname+"</td>"+
					"<td id='t"+list[i].fid+"'>"+list[i].type+"</td><td id='s"+list[i].fid+"'>"+list[i].size+"</td>"+
					"<td id='p"+list[i].fid+"'>"+list[i].price+"</td><td id='da"+list[i].fid+"'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='d"+list[i].fid+"'>删除</button></td>"
					+"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].fid+"'>修改</button></td></tr>");
				}
                //tp = list[i].totalPage;
               
			 	},
			 error : function(xhr, status, errMsg) {
				 alert("查询对应鱼类的数据传输失败！！抱歉");
			   }
	 });
    
}

function deleted(i){
	if(confirm("确认删除该条信息吗？")){
	$.ajax({
			
			 type:"get",
			 url:deletePath,
			 data : {"fid":i},                                  
			 success : function(data, textStatus) {
				 
				alert("删除成功");
				findMoneyList(page);
				
               },
			 error : function(xhr, status, errMsg) {
				 alert("删除失败！！抱歉");
			   }
	 });
	 }
}

function getAllPage(){
	$.ajax({
		 type:"post",
		 url:getAllPagePath,                                  
		 dataType:"json",
		 success : function(data, textStatus) {
			var list = data.allPage;
            	tp = list;
            	setPage();
            	//console.log(tp);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("获取总页数失败！！抱歉");
		   }
});
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();

}

function add(){
	window.location.href="manager_money_i.html";
}
function closeUpdate(){
	$(".update").fadeOut();
	$("#path2").text("");
	$(".update input").val("");
	$(".content").css("filter","blur(0px)");
}
function showUpdate(){
	
	$(".update").slideToggle();
	$("#path2").text("条目修改");
	$(".content").css("filter","blur(2px)");

}

function updated(f,t,s,p,d,id){
    if(confirm("确认要修改该条信息吗？")){
	$.ajax({
			 type:"get",
			 url:updatePath,
			 data : {"fishname":f,"type":t,"size":s,"price":p,"date":d,"fid":id},                                  
			 success : function(data, textStatus) {
				 
				alert("修改成功");
				findMoneyList(page);
               },
			 error : function(xhr, status, errMsg) {
				 alert("修改失败！！抱歉");
			   }
	 });
	 }
}
function setUpdateInfo(index){
		var fishName = $(".rightTable table  #f"+index).text();
        var type = $(".rightTable table  #t"+index).text();
        var size = $(".rightTable table  #s"+index).text();
        var price = $(".rightTable table  #p"+index).text();
        var date = $(".rightTable table  #da"+index).text();
		$(".update  #f").val(fishName);
        $(".update  #t").val(type);
        $(".update  #s").val(size);
        $(".update  #p").val(price);
        $(".update  #da").val(date);
}
function nextPage(){
    var pn = ++page;
    if(pn<=tp)
    findMoneyList(pn);
	if(page>=tp)
		page=tp;
}
function forePage(){
    var pn = --page;
    if(pn>=1)
    findMoneyList(pn);
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    	{
			findMoneyList(pn);
			page = pn;
		}

	else
		alert("请输入正确页码");
	$("#jeepPage").val("");	
	setPage();
}
function setPage(){

    $(".pageDiv #nowP").text("第"+page+"页/");
	$(".pageDiv #tp").text("共"+tp+"页");
}
var tp = 7;
var page = 1;
var u_index;
$(document).ready(function(){
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	$(".rightTable #select").click(function(){
		var name = $(".rightTable #fishName").val();
		selectFishList(name);
	});
	$(".rightTable table").on("click","[id*='de']",function(){
		var i = $(this).attr('id');
		var id = i.substr(2);
		deleted(id);
	});
	$(".rightTable table").on("click","[id*='u']",function(){
		var i = $(this).attr('id');
		var index = i.substr(1);
		u_index = index;
		showUpdate();
		setUpdateInfo(index);
		//console.log(fishName);
	});

	$(".update #submit").click(function(){
		var fishName = $(".update  #f").val();
        var type = $(".update  #t").val();
        var size = $(".update  #s").val();
        var price = $(".update  #p").val();
        var date = $(".update  #da").val();
		updated(fishName,type,size,price,date,u_index);
	});
});
