const findAnswerByNidPath = "/fishskills/que?method=findquebyid";//根据id查找对应回答信息
const tryAnswerPath = "/fishskills/que?method=answer";//用户尝试回复待审核
function GetRequest() {
    var url = location.search;         //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var a=GetRequest();
const nid = a['nid'];
findAnswerByNid(nid);
function findAnswerByNid(id){
    $.ajax({
		 type:"get",
		 url:findAnswerByNidPath,                                  
		 dataType : "json",
         data:{"questionid":id},
		 success : function(data, textStatus){
			var list = data;
			//tp = data.tp;
			
				var theme = list.theme;
                var details = list.details;
                var answer = list.answer;
                if(answer.length!=0){
                   
                        $("textarea").hide();
                        $("#answer").text(answer);
                        $("#flag").hide();
                    }
				$("#theme").text(theme);
                $("#details").text(details);	
                
				},
		 error : function(xhr, status, errMsg) {
			 alert("问题详情信息数据传输失败！！抱歉");
		   }
});
}

function tryAnswer(answer){
    if(confirm("确认提交此条回复吗？")){
     $.ajax({
		 type:"post",
		 url:tryAnswerPath,                                  
		 dataType : "json",
         data:{"questionid":nid,"answer":answer},
		 success : function(data, textStatus){
			 
			alert(data.msg+":管理员审核中");
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("提交回复失败！！抱歉");
		   }
    });
}
}
function save(){
    var answer = $("textarea").val();
    answer = answer.trim();
    if(answer)
    	tryAnswer(answer);
    else
    	alert("你的输入为空");
}

function reset(){
    $("textarea").val("");
}