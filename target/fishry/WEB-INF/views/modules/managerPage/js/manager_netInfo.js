const findFishPath = "/fishskills/showDown?method=showDown&ls=8";
const findfastInfoPath = " /fishskills/news?method=QueryNews&ps=10&dic=1611";
function findFastInfoList(p ,optionChange){
  
clearTable();
if(optionChange == 1612){
   $.ajax({
		 type:"get",
		 url:findFishPath,                                  
		 dataType : "json",
         data:{"cp":p},
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].downloadtime;
				var date = d.substr(0,10);
				var fileExtension = list[i].downloadsource.substring(list[i].downloadsource.lastIndexOf('.') + 1);
				
				switch(fileExtension){
					case 'pdf':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
					"<a href='../image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td class='color-oran'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].id+"'>删除</button></td>"+
					"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].id+"'>修改</button></td></tr>");break;
					case 'doc':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
					"<a href='../image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"</a></td><td class='color-oran'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].id+"'>删除</button></td>"+
					"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].id+"'>修改</button></td></tr>");break;
					case 'docx':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
					"<a href='../image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"</a></td><td class='color-oran'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].id+"'>删除</button></td>"+
					"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].id+"'>修改</button></td></tr>");break;
					case 'txt':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
					"<a href='../image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td class='color-oran'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].id+"'>删除</button></td>"+
					"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].id+"'>修改</button></td></tr>");break;
					default:$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
					"<a href='../image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td class='color-oran'>"+date+"</td>"+
					"<td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].id+"'>删除</button></td>"+
					"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].id+"'>修改</button></td></tr>");break;
				}
                   
				}
			setPage();
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("水产简报数据传输失败！！抱歉");
		   }
});
}
else{
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
				
					
                $(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830"+
				"<a href='../detail_fastInfo.html?nid="+list[i].nid+" 'target='blank' title='"+title+"'>"+title+" </a>"+
				"<td>"+date+"</td>"+
				"</td><td><button class='btn red'style='width:50px;height:28px'id='de"+list[i].nid+"'>删除</button></td>"+
				"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].nid+"'>修改</button></td>"+
				"</tr>");
                   
				}
			setPage();
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("站务平台数据传输失败！！抱歉");
		   }
});
}
}
function add(){
	switch(optionChange){
	
	case '1611':window.location.href="manager_addNews";break;
	case '1612':window.location.href="manager_addHarvest";break;
	
	}
	
}

function deleteDown(id){
	if(confirm("确认删除此问题？")){
	$.ajax({
		 type:"get",
		 url:"/fishskills/back/Down?method=deleteDown",                                  
		 dataType : "json",
         data:{"id":id},
		 success : function(data, textStatus){
			 findFastInfoList(page ,optionChange);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("删除失败！！！抱歉");
		   }
});
}
}	
function deleteNetInfo(id){
	if(confirm("确认删除此问题？")){
	$.ajax({
		 type:"get",
		 url:"/fishskills/back/news?method=deleteNew",                                  
         data:{"nid":id},
		 success : function(data, textStatus){
			 alert("删除成功");
			 findFastInfoList(page ,optionChange);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("删除失败！！！抱歉");
		   }
});
}
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();

}
function nextPage(){
	
    var pn = ++page;
    if(pn<=tp){
		switch(optionChange){
		case '1611':$("#path2").text("站务信息");findFastInfoList(page,optionChange);break;
		case '1612':$("#path2").text("水产简报");findFastInfoList(page,optionChange);break;
	}
	}
	if(page>=tp)
		page=tp;
}
function forePage(){
    var pn = --page;
    if(pn>=1){
		switch(optionChange){
		case '1611':$("#path2").text("站务信息");findFastInfoList(page,optionChange);break;
		case '1612':$("#path2").text("水产简报");findFastInfoList(page,optionChange);break;
	}
	}
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp){
		switch(optionChange){
		case '1611':$("#path2").text("站务信息");findFastInfoList(page,optionChange);break;
		case '1612':$("#path2").text("水产简报");findFastInfoList(page,optionChange);break;
	}
	}
	else
		alert("请输入正确页码");
}
function setPage(){

    $(".pageDiv #nowP").text("第"+page+"页");
	$(".pageDiv #tp").text("第"+tp+"页");
}
function checkOption(){
	page = 1;
	tp = 1;
	optionChange = $(":selected").val();
	switch(optionChange){
		case '1611':$("#path2").text("站务信息");findFastInfoList(page,optionChange);break;
		case '1612':$("#path2").text("水产简报");findFastInfoList(page,optionChange);break;
	}
}
var tp = 2;
var page = 1;
var optionChange = 1611;
$(document).ready(function(){
	
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	$(".rightTable table").on("click","[id*='de']",function(){
		var id = $(this).attr('id');
		id = id.substr(2);
		switch(optionChange){
		case '1611':deleteNetInfo(id);break;
		case '1612':deleteDown(id);break;
		}
		
	});
	
});
