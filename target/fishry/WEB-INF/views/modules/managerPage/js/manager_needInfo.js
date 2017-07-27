const insertPath = "/fishskills/back/Info?method=insertInformation";
function inserted(i_name,date,name,phone,email,address,post,i_cont,did){//informationname、date、name、phone、email、address、post、information、adminid、dictionaryid
  if(confirm("确认新增此条供应信息吗？")){ 
      $.ajax({
		 type:"get",
		 url:insertPath,                                 
         data:{"informationname":i_name,"date":date,"name":name,"phone":phone,"email":email,"address":address,"post":post,"information":i_cont,"adminid":"1","dictionaryid":did},
		 success : function(data, textStatus){
			alert("新增成功");
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("新增失败！！抱歉");
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
    var did = $(".newsFields :selected").val();
    //console.log(i_name,date,name,phone,email,address,post,i_cont);
    inserted(i_name,date,name,phone,email,address,post,i_cont,did);
}
function back(){
    window.location.href="manager_information.html";
}