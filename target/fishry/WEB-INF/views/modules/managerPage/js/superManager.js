findAllAdminid();
function findAllAdminid(){//查找全部管理人员
clearTable();
   $.ajax({
		 type:"get",
		 url:"/fishskills/back/Admin?method=showAdmin",                                
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
                var pids = list[i].pids;
                var pList = "</td><td style='color:gray'>暂无填充</td>";
                if(pids.length!=0){
                    pList = "</td><td style='color:blue'>"+pids+"</td>";
                }
                $(".rightTable table").append("<tr><td style='font-size:14px;letter-spacing:3px;color:orange;'>"+list[i].adminid+
                "</td><td >"+list[i].adminname+""+
				pList+
				"<td><button class='btn red'style='width:50px;height:28px' id='de"+list[i].adminid+"'>删除</button></td>"+
                "<td><button class='btn gold'style='width:50px;height:28px' id='lo"+list[i].adminid+"'>详细</button></td>"+
				"<td><button class='btn gray'style='width:50px;height:28px'id='u"+list[i].adminid+"'>修改</button></td>"+
				"</tr>");
				}
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("查找数据传输失败！！抱歉");
		   }
});
    
}


function deleted(i){//删除该管理员
	if(confirm("确认删除该管理员吗？")){
	$.ajax({
			
			 type:"get",
			 url:"/fishskills/back/Admin?method=deleteAdmin",
			 data : {"adminid":i}, 
			 dataType:"json",                                 
			 success : function(data, textStatus) {
				alert(data.msg);
				findAllAdminid();
				
               },
			 error : function(xhr, status, errMsg) {
				 alert("删除失败！！抱歉");
			   }
	 });
	 }
}
function addAdmin(){
	window.location.href="addManager.html";
}
function clearTable(){

    $(".rightTable table tr:gt(0)").empty();

}
///back/power?method=showPrivilege&adminid=1
function findPowerListById(id){
	$.ajax({
		 type:"get",
		 url:"/fishskills/back/power?method=showPrivilege",                                
		 dataType : "json",
         data:{"adminid":id},
		 success : function(data, textStatus){
			var list = data;
			$("#showNum").text("拥有权限("+list.length+")：");
			for(var i in list){
			 if(i>0&&i%4==0)
				 $(".update #pids").append("<br><br>");
			$(".update #pids").append(list[i].privilege.name+",");
			}
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("查找对应权限数据传输失败！！抱歉");
		   }
});
}
function findById(id){//id查找对应信息
     $.ajax({
		 type:"get",
		 url:"/fishskills/back/Admin?method=selectAdminid",                                
		 dataType : "json",
         data:{"adminid":id},
		 success : function(data, textStatus){
			findPowerListById(id);
			var list = data;
			$(".update #adminid").text(list.adminid).css({"text-decoration":"underline"});
            $(".update #adminname").text(list.adminname).css({"text-decoration":"underline"});
            $(".update #adminphone").text(list.adminphone).css({"text-decoration":"underline"});
            $(".update #adminemail").text(list.adminemail).css({"text-decoration":"underline"});
            $(".update #password").text(list.password).css({"text-decoration":"underline"});
            $(".update #note").text(list.note).css({"text-decoration":"underline"});
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("查找数据传输失败！！抱歉");
		   }
});

}
$(document).ready(function(){
	/*$(".pageDiv #jeep").click(function(){
		jeep();
	});*/
	$(".rightTable table").on("click","[id*='de']",function(){
		var i = $(this).attr('id');
		var id = i.substr(2);
		deleted(id);
	});
	$(".rightTable table").on("click","[id*='u']",function(){
		var i = $(this).attr('id');
		var id = i.substr(1);
		
	});
    $(".rightTable table").on("click","[id*='lo']",function(){
		var i = $(this).attr('id');
		var id = i.substr(2);
		$(".update").slideDown();
		$(".content").css('filter','blur(2px)');
        findById(id);
	});
    
    $("#closeBtn").click(function(){
        $(".update").fadeOut();
        $(".update #adminid").text("");
        $(".update #adminname").text("");
        $(".update #pids").text("");
        $(".update #adminphone").text("");
        $(".update #adminemail").text("");
        $(".update #password").text("");
        $("#showNum").text("");
        $(".update #note").text("");
        $(".content").css('filter','blur(0px)');
    });
    
});
