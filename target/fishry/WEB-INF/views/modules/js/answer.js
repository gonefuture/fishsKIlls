const findAnswerPath = " /fishskills/que?method=questionlist";

function findAnswerList(p){
clearTable();
   $.ajax({
		 type:"get",
		 url:findAnswerPath,                                  
		 dataType : "json",
         data:{"cp":p,"ls":"10"},
		 success : function(data, textStatus){
			var list = data;
			//tp = data.tp;
			for(var i in list){
				var title = list[i].theme;
                var flag = list[i].answer;
                if(list[i].flag){
                if(flag.length==0)
                    flag = "未回复";
                else 
                    flag = "已回复";

				if(title.length>30)
					{title = title.substr(0,30)+"...";}
				else 
					{title = title.substr(0);}
					
                $(".rightTable table").append("<tr>"+
                "<td style='text-align:left'><a href='detail_answer.html?nid="+list[i].questionid+"'><span style='color:green'>&gt</span>"+title+"</a></td>"+
                "<td>"+flag+"</td>"+
                "<td>[2017-07-4]</td>"+
                "</tr>");
                   
				}
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("问题总览信息数据传输失败！！抱歉");
		   }
});
    setPage();  
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();

}
function nextPage(){
    var pn = ++page;
    if(pn<=tp)
    findAnswerList(pn);
	if(page>=tp)
		page=tp;
}
function forePage(){
    var pn = --page;
    if(pn>=1)
    findAnswerList(pn);
	if(page<=0)
		page=1;
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    {
		findAnswerList(pn);
		page = pn;
	}
	else
		alert("请输入正确页码");
	$("#jeepPage").val("");
	setPage();
}
function setPage(){

    $(".pageDiv #nowP").text("第"+page+"页/");
	$(".pageDiv #tp").text("第"+tp+"页");
}
var tp = 6;
var page = 1;
$(document).ready(function(){
	$(".pageDiv #jeep").click(function(){
		jeep();
	});
	
});
