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
var info = a['dic'];
var dic = info.substr(0,4);
var title = info.substr(4);
findFastInfoList(title,dic);
function findFastInfoList(t,d){

   $.ajax({
		 type:"post",
		 url:"/fishskills/news?method=QueryNews&ps=20&dic="+d+"&title="+t,                                  
		 dataType : "json",
		 success : function(data, textStatus){
             var list = data.list;
             for(var i in list){
                var t = list[i].pubdate;
                var date = new Date(t).toLocaleString();
                date = date.substr(0,10);
                var ti = list[i].title;
                ti = ti.replace("/"+title+"/g","<span style='color:red'>"+title+"</span>");
			    
                $("table").append("<tr><td style='color:green'>&#9647</td><td><a href='detail_fastInfo.html?nid="+list[i].nid+"' target='blank'>"+ti+"</td>"+

                    "<td>["+date+"]</td>"+
                    "</tr>"
                );
	
             }
		},
		 error : function(xhr, status, errMsg) {
			 alert("查找失败！！抱歉");
		}
});
    
}