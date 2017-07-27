const findfastInfoPath = " /fishskills//showDown?method=showDown&ls=8";

function findFastInfoList(p){
  
clearTable();
   $.ajax({
		 type:"get",
		 url:findfastInfoPath,                                  
		 dataType : "json",
         data:{"cp":p},
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].downloadtime;
				var date = d.substr(0,10);
				var fileExtension = list[i].downloadsource.substring(list[i].downloadsource.lastIndexOf('.') + 1);
				if(i>0&&i%4==0)	
					$(".rightTable table").append("<tr><td ></td><td></td><td ></td></tr><tr ><td s></td><td ></td><td ></td></tr>");
				switch(fileExtension){
					case 'pdf':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830<a href='"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td></td><td class='color-oran'>"+date+"</td></tr>");break;
					case 'doc':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830<a href='"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"</a></td><td></td><td class='color-oran'>"+date+"</td></tr>");break;
					case 'docx':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830<a href='"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"</a></td><td></td><td class='color-oran'>"+date+"</td></tr>");break;
					case 'txt':$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830<a href='"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td></td><td class='color-oran'>"+date+"</td></tr>");break;
					default:$(".rightTable table").append("<tr><td class='color-oran' style='text-align:left;font-size:14px;letter-spacing:3px'>&#9830<a href='"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"</a></td><td></td><td class='color-oran'>"+date+"</td></tr>");break;
				}
                   
				}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("水产简报数据传输失败！！抱歉");
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
