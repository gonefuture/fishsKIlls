const findAnswerPath = "/fishskills/que?method=questionlist";
const passAnswerPath = " /fishskills/back/Que?method=validate";
const deleteAnswerPath = "/fishskills/back/Que?method=deletequestion";
function findAnswerList(p){  //这里就可以看到有无回复的问题;
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
                if(flag.length==0)
                    flag = "<span style='color:#800000'>未回复</span>";
                else 
                    flag = "<span style='color:green'>已回复</span>";

				if(title.length>30)
					{title = title.substr(0,30)+"...";}
				else 
					{title = title.substr(0);}
					
                $(".rightTable table").append("<tr>"+
                "<td style='text-align:left'><a href='../detail_answer.html?nid="+list[i].questionid+"'><span style='color:green'>&gt</span>"+title+"</a></td>"+
                "<td >"+flag+"</td>"+
				"<td>"+list[i].adminid+"</td>"+
                "<td>[2017-07-4]</td>"+
				"<td><button id='de"+list[i].questionid+"'class=' btn red'style='width:60px;height:28px'>删除</button></td>"+
				"<td></td>"+
                "</tr>");
				}
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("问题总览信息数据传输失败！！抱歉");
		   }
});
    setPage();  
}

function checkAnswerList(p){  //这里就可以看到是否有待审核的问题;
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
                var answer = list[i].answer;
				var flag = list[i].flag;
                if(flag==0&&answer.length!=0){
                    flag = "已有回复,待审核";

				if(title.length>30)
					{title = title.substr(0,30)+"...";}
				else 
					{title = title.substr(0);}
					
                $(".rightTable table").append("<tr>"+
                "<td style='text-align:left'><a href='../detail_answer.html?nid="+list[i].questionid+"'><span style='color:green'>&gt</span>"+title+"</a></td>"+
                "<td style='color:orange'>"+flag+"</td>"+
				"<td>"+list[i].adminid+"</td>"+
                "<td>[2017-07-4]</td>"+
				"<td><button id='re"+list[i].questionid+"'class=' btn purple'style='width:60px;height:28px;'>否决</button></td>"+
				"<td><button id='p"+list[i].questionid+"'class=' btn duck'style='width:60px;height:28px'>通过</button></td>"+
                "</tr>");
				}
				if(flag==1&&answer.length!=0){
                    flag = "已审核";

				if(title.length>30)
					{title = title.substr(0,30)+"...";}
				else 
					{title = title.substr(0);}
					
                $(".rightTable table").append("<tr>"+
                "<td style='text-align:left'><a href='../detail_answer.html?nid="+list[i].questionid+"'><span style='color:green'>&gt</span>"+title+"</a></td>"+
                "<td style='color:green'>"+flag+"</td>"+
				"<td>"+list[i].adminid+"</td>"+
                "<td>[2017-07-4]</td>"+
				"<td><button id='de"+list[i].questionid+"'class=' btn red'style='width:60px;height:28px;'>删除</button></td>"+
				"<td><button id='p"+list[i].questionid+"'class=' btn duck'style='width:60px;height:28px'>通过</button></td>"+
                "</tr>");
				}
				}
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("问题审核信息数据传输失败！！抱歉");
		   }
});
    setPage();  
}
function passAnswer(id){
	if(confirm("确认通过？")){
	   $.ajax({
		 type:"get",
		 url:passAnswerPath,
		 dataType : "json",
         data:{"questionid":id,"flag":"1"},
		 success : function(data, textStatus){
			 alert(data.msg);
			checkAnswerList(page);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("该条回复状态修改失败！！！抱歉");
		   }
});
}
}
function rejectAnswer(id){
	if(confirm("确认否决？")){
	   $.ajax({
		 type:"get",
		 url:passAnswerPath,                                  
		 dataType : "json",
         data:{"questionid":id,"flag":"0"},
		 success : function(data, textStatus){
			 alert("已否决");
			checkAnswerList(page);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("该条回复状态修改失败！！！抱歉");
		   }
});
}
}



function deleteAnswer(id){
	if(confirm("确认删除此问题？")){
	$.ajax({
		 type:"get",
		 url:deleteAnswerPath,                                  
		 dataType : "json",
         data:{"questionid":id},
		 success : function(data, textStatus){
			alert(data.msg);
			if(checkNow==1)
				checkAnswerList(page);
			else
				findAnswerList(page);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("该条回复删除失败！！！抱歉");
		   }
});
}
}	
function checkOption(){
	var option = $(":selected").val();
	console.log(option);
	if(option==2){
		checkNow = 1;
		checkAnswerList(1);
			
	}
	else{

		checkNow = 0;
		findAnswerList(1);
	}

}

function addQuestion(){
	window.location.href="../question.html";
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();
}
var checkNow = 0;
function nextPage(){
	if(checkNow==0){
    var pn = ++page;
    if(pn<=tp)
    findAnswerList(pn);
	if(page>=tp)
		page=tp;
	}
	else{
	var pn = ++page;
    if(pn<=tp)
    checkAnswerList(pn);
	if(page>=tp)
		page=tp;
	}

}
function forePage(){
	if(checkNow==0){
    var pn = --page;
    if(pn>=1)
    findAnswerList(pn);
	if(page<=0)
		page=1;
	}else{
	var pn = --page;
    if(pn>=1)
    checkAnswerList(pn);
	if(page<=0)
		page=1;
	}
}
function jeep(){
    var pn = $("#jeepPage").val();
	if(pn.length!=0&&pn<=tp)
    {	if(checkNow==0)
			findAnswerList(pn);
		else
			checkAnswerList(pn);
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
	$(".rightTable table").on("click","[id*='p']",function(){
		var id = $(this).attr('id');
		id = id.substr(1);
		passAnswer(id);
	});
	$(".rightTable table").on("click","[id*='de']",function(){
		var id = $(this).attr('id');
		id = id.substr(2);
		deleteAnswer(id);
	});
	$(".rightTable table").on("click","[id*='re']",function(){
		var id = $(this).attr('id');
		id = id.substr(2);
		rejectAnswer(id);
	});
});
