const selectInformationPath = "/fishskills/Info?method=selectInfoId";
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
var id = a['informationid'];
findNeedInfoList(id);
function findNeedInfoList(nid){
  
   $.ajax({
		 type:"get",
		 url:selectInformationPath,                                  
		 dataType : "json",
         data:{"informationid":nid},
		 success : function(data, textStatus){
			var list = data;
			$("#informationname").append(list[0].informationname);
            $("#name").append(list[0].name);
            $("#phone").append(list[0].phone);
            $("#email").append(list[0].email);
            $("#post").append(list[0].post);
            $("#address").append(list[0].address);
            $("#information").text(list[0].information);
            var date = list[0].date;
            date = date.substr(0,10);
            $("#date").append(date);
            
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("供求信息详情数据传输失败！！抱歉");
		   }
});
    
}