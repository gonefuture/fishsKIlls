const updatePath = "/fishskills/back/Info?method=updateInformation";
const setPath = "/fishskills/Info?method=selectInfoId";
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
var  myInfo = a['nid'];
const dic = myInfo.substr(0,4);
const nid = myInfo.substring(4);
console.log(dic+":"+nid);
function seted(){//informationname、date、name、phone、email、address、post、information、adminid、dictionaryid

      $.ajax({
		 type:"get",
		 url:setPath,                                 
         data:{"informationid":nid},
		 success : function(data, textStatus){
            var list = JSON.parse(data);
			var i_name = list[0].informationname;
            var name = list[0].name;
            var phone =list[0].phone;
            var email = list[0].email;
            var address = list[0].address;
            var post = list[0].post;
            var information = list[0].information;
            var date = list[0].date;
        if(date)
            date = new Date().toLocaleDateString();
        console.log(name);
        $(".newsFields #informationname").val(i_name);
        $(".newsFields #date").val(date);
        $(".newsFields #name").val(name);
        $(".newsFields #phone").val(phone);
        $(".newsFields #email").val(email);
        $(".newsFields #address").val(address);
        $(".newsFields #post").val(post);
        $(".newsFields #information").val(information);
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("获取该条信息失败！！抱歉");
		   }
    });
    
    
}
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
    var i_name = $(".newsFields #informationname").val();
    var date = $(".newsFields #date").val();
    if(date.length==0)
        date = new Date().toLocaleDateString();
    var name = $(".newsFields #name").val();
    var phone = $(".newsFields #phone").val();
    var email = $(".newsFields #email").val();
    var address = $(".newsFields #address").val();
    var post = $(".newsFields #post").val();
    var i_cont = $(".newsFields #information").val();
    //console.log(i_name,date,name,phone,email,address,post,i_cont);
    updated(i_name,date,name,phone,email,address,post,i_cont);
}
function back(){
    window.location.href="manager_information.html";
}
$(document).ready(function(){

});