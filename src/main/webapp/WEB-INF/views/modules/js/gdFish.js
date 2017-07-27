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
const pic = a['pic'];
findFastInfoList(1,pic);

function findFastInfoList(p,dic){
	clearTable();
   $.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&ps=1",                                
		 dataType : "json",
         data:{"pc":p,"dic":dic},
		 success : function(data, textStatus){
			var list = data.list;
            $("#title").append(list[0].title);
            $("#souceName").append(list[0].soucename);
            $(".newsFields #p").text(list[0].content);
			var date = list[0].pubdate;
            var t  = new Date(date);
            var time = t.toLocaleString();
            time = time.substr(0,10);
            $("#date").append(time);
            $("#author").append(list[0].adminid);
            if(list[0].pic){
            	$(".img").attr('src',"image/temp/"+list[0].pic);
            }else{
            	$(".img").hide();
            }
            setPath();
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("模块数据传输失败！！抱歉");
		   }
});
    
}



function clearTable(){

    		$("#title").text("标题:");
            $("#souceName").text("来源：");
            $(".newsFields p").text("");
            $("#date").text("上传时间：");
            $("#author").text("作者：");
            $(".img").attr('src',"");
}


function setPath(){

	$("#path2").text("");
	$("#path2").text(nowText);

}

var nowText;
var nowPic;
$(document).ready(function(){

	$(".leftMoneyBottom li").click(function(){
		nowPic = $(this).attr('id');
		nowText = $(this).text();
		findFastInfoList(1,nowPic);
	});

	
});
