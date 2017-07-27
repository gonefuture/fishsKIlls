//const updatePath = "/fishskills/back/news?method=editNews";
const setPath = "/fishskills/news?method=findByNid";
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
var  nid = a['nid'];
seted();
function seted(){//informationname、date、name、phone、email、address、post、information、adminid、dictionaryid

      $.ajax({
		 type:"get",
		 url:setPath,                                 
         data:{"nid":nid},
		 success : function(data, textStatus){
            var list = JSON.parse(data);
            $("#title").val(list.title);
            $("#souceName").val(list.soucename);
            $("textarea").val(list.content);
			var date = list.pubdate;
            var t  = new Date(date);
            var time = t.toLocaleString();
            time = time.substr(0,10);
            $("#date").val(time);
            $("#adminid").val(list.adminid);
            $("#img_name").text(list.pic);
            $("#img").attr('src',"../image/temp/"+list.pic);
            if(list.lockflag==1)
                $("input:radio:first").attr('checked', 'checked');
            else 
                $("input:radio:last").attr('checked', 'checked');
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("获取该条信息失败！！抱歉");
		   }
    });
    
}
/*
function updated(i_name,date,name,phone,email,address,post,i_cont){//informationname、date、name、phone、email、address、post、information、adminid、dictionaryid
  if(confirm("确认修改此条供应信息吗？")){ 
      $.ajax({
		 type:"post",
		 url:updatePath, 
         data:{"informationname":i_name,"informationid":nid,"date":date,"name":name,"phone":phone,"email":email,"address":address,"post":post,"information":i_cont,"adminid":"1","dictionaryid":dic},
		 success : function(data, textStatus){
			alert("修改成功");
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("修改失败！！抱歉");
		   }
    });
    }
    
}

function save(){
    var title = $(".newsFields #title").val();
    var date = $(".newsFields #date").val();
    if(date.length==0)
        date = new Date().toLocaleDateString();
    var souceName = $(".newsFields #souceName").val();
    var adminid = $(".newsFields #adminid").val();

    updated(i_name,date,name,phone,email,address,post,i_cont);
}*/
function back(){
    window.location.href="manager_news.html";
}
$(document).ready(function(){

});