const insertPath = "/fishskills/back/Fish?method=insertFish";
addInput();
var num = 1;
function addInput() {

    $(".rightTable table").append("<tr>"+
    "<td><input placeholder='产品名称'id='f"+num+"'></td>"+
    "<td><input placeholder='类别'id='t"+num+"'></td>"+
    "<td><input placeholder='规格'id='s"+num+"'></td>"+
    "<td><input placeholder='价格'id='p"+num+"'></td>"+
    "<td><input placeholder='不填默认当前时间'id='d"+num+"'></td>"+
    "<td><button class='btn duck' id='ok"+num+"'style='width:50px;height:28px'>确认</button></td>"+
    "<td><button class='btn lowBlue' id='add"+num+"'style='width:50px;height:28px'>继续</button></td>"
    +"</tr>");
    num ++;
}
function inserted(f,t,s,p,d){
    if(confirm("确认要新增该条信息吗？")){
	$.ajax({
			 type:"get",
			 url:insertPath,
			 data : {"fishname":f,"type":t,"size":s,"price":p,"date":d},                                  
			 success : function(data, textStatus) {
				alert("新增成功");
               },
			 error : function(xhr, status, errMsg) {
				 alert("新增失败！！抱歉");
			   }
	 });
	 }
}
$(document).ready(function(){
    $(".rightTable table").on("click","[id*='add']",function(){
        addInput();
    });    
    $(".rightTable table").on("click","[id*='ok']",function(){
        var index = $(this).attr('id');
        index = index.substr(2);
        var fishName = $(".rightTable table #f"+index).val();
        var type = $(".rightTable table #t"+index).val();
        var size = $(".rightTable table #s"+index).val();
        var price = $(".rightTable table #p"+index).val();
        var date = $(".rightTable table #d"+index).val();
        if(date.length==0)
            date = new Date().toLocaleDateString();
        inserted(fishName,type,size,price,date);
    });
})