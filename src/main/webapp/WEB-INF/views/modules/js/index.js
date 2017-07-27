
function getMoneyInfo(){  //水产行情数据传输
	 $.ajax({
			 type:"get",
			 url:"/fishskills/Fish?method=showFish",                                   
			 data : {"pageNum":1},
			 dataType : "json",
			 success :function(data, textStatus) {
				var list = eval(data);
				for(var i=0 ;i<list.length;i++){
					var d = list[i].date;
					var date = d.substr(0,10);
					$(".money #moneyList").append("<tr><td>"+list[i].fishname+"</td><td>"+list[i].type+"</td><td>"+list[i].size+"</td><td>"+list[i].price+"</td><td>"+date+"</td></tr>");
				}
			 	},
			 error :function(xhr, status, errMsg) {
				switch (status) {
                    case 404:alert(status+":未找到服务器");break;
                    case 500:alert(status+":服务错发生内部错误");break;
                    case 400:alert(status+":前端客户端请求有语法错误");break;
                    case 405:alert(status+":前端客户端请求方法类型非法");break;
                    default:alert("水产行情数据传输失败！！抱歉");break;
                }
			   }
	 });
}
var fastPicPath = []; 
var fastTextPath = [];
var fastNidPath = [];
function getFastInfo(){ //信息快讯数据
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=6&dic=1811",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			$(".fastInfo #fast1").text(list[0].title.substr(0)).attr('href','detail_fastInfo.html?nid='+list[0].nid).attr('target','blank');
			$(".fastInfo #fast2").text(list[1].title.substr(0)).attr('href','detail_fastInfo.html?nid='+list[1].nid).attr('target','blank');
			$(".img").css("background-image","url(image/temp/"+list[0].pic);
			$("#imgText").text(list[0].title).attr('href',"detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			for(var i in list){
				fastPicPath[i]=list[i].pic;
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				else 
					title = title.substr(0);
				fastTextPath[i] = title;
				fastNidPath[i] = list[i].nid;
				$(".fastInfo #fastList").append("<tr><td><span style='color:#800000'>[本地快讯]</span></td><td style='text-align:left'><a href='detail_fastInfo.html?nid="+list[i].nid+" ' target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("信息快讯数据传输失败！！抱歉");
		   }
});
}
function getSaiedInfo(){ //通知公告数据
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=7&dic=1400",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".infoSaied ul").append("<li><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+"["+date+"]</a></li>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("信息快讯数据传输失败！！抱歉");
		   }
});
}
function getIllInfo_0(){ //病房检疫
	$(".illCheck table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1911",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".illCheck table").append("<tr><td><span style='color:#0f0'>&gt</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("病防检疫数据传输失败！！抱歉");
		   }
});
}
function getIllInfo_1(){ //病房防治
	$(".illCheck table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1912",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".illCheck table").append("<tr><td><span style='color:#0f0'>&gt</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("病防检疫数据传输失败！！抱歉");
		   }
});
}
function getIllInfo_2(){ //质量标准
	$(".illCheck table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1913",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".illCheck table").append("<tr><td><span style='color:#0f0'>&gt</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
			 alert("病防检疫数据传输失败！！抱歉");
		   }
});
}
function getIllInfo_3(){ 
	$(".illCheck table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1914",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".illCheck table").append("<tr><td><span style='color:#0f0'>&gt</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("病防检疫数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getTechInfo0(){
	$(".techlo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1811",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".techlo table").append("<tr><td><span style='color:#0f0;font-size:16px'>&#149</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("科技推广数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getTechInfo1(){
	$(".techlo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1812",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".techlo table").append("<tr><td><span style='color:#0f0;font-size:16px'>&#149</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("科技推广数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getTechInfo2(){
	$(".techlo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1813",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".techlo table").append("<tr><td><span style='color:#0f0;font-size:16px'>&#149</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch(status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("科技推广数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getTechInfo3(){
	$(".techlo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1814",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".techlo table").append("<tr><td><span style='color:#0f0;font-size:16px'>&#149</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("科技推广数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getTechInfo4(){
	$(".techlo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=1815",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = eval(data).list;
			for(var i in list){
				var t = list[i].pubdate;
				var time = new Date( t ) ;
				var d = time.toLocaleString();
				var date = d.substr(0,10);
				var title = list[i].title;
				if(title.length>25)
					title = title.substr(0,25)+"...";
				
				$(".techlo table").append("<tr><td><span style='color:#0f0;font-size:16px'>&#149</span></td><td><a href='detail_fastInfo.html?nid="+list[i].nid+" 'target='blank'>"+title+" </a></td><td>"+date+" </td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("科技推广数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getNeedInfo(n){
	 
	$(".needInfo table").empty();
	$.ajax({
		 type:"get",
		 url:"/fishskills/Info?method=showInformation",                                  
		 dataType : "json",
		 data:{"pageNum":n,"dictionaryid":"1711"},
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].date;
				var date = d.substr(0,10);
				var title = list[i].informationname;
				if(title.length>23)
					title = title.substr(0,23)+"...";
				else
					title = title.substr(0);
				$(".needInfo table").append("<tr><td><span style='color:#4c920a'>&gt[供应]</span></td><td style='text-align:left'><a href='detail_needInfo.html?informationid="+list[i].informationid+" 'target='blank'>"+title+" </a></td></tr>");
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break;
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert("供求信息数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
function getFishHarvest(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/showDown?method=showDown&ls=7&cp=1",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data;
			for(var i in list){
				var d = list[i].downloadtime
				d = new Date(d).toLocaleString();
				var date = d.substr(0,10);
				var fileExtension = list[i].downloadsource.substring(list[i].downloadsource.lastIndexOf('.') + 1);
				switch(fileExtension){
					case 'pdf':$(".fishHarvest ul").append("<li style='text-align:left'><a href='image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"&nbsp["+date+"]</a></li>");break;
					case 'doc':$(".fishHarvest ul").append("<li style='text-align:left'><a href='image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"&nbsp["+date+"]</a></li>");break;
					case 'docx':$(".fishHarvest ul").append("<li style='text-align:left'><a href='image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击自动下载' target='_blank'>"+list[i].name+"&nbsp["+date+"]</a></li>");break;
					case 'txt':$(".fishHarvest ul").append("<li style='text-align:left'><a href='image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"&nbsp["+date+"]</a></li>");break;
					default:$(".fishHarvest ul").append("<li style='text-align:left'><a href='image/temp/"+list[i].downloadsource+"' title='"+list[i].name+fileExtension+"文件点击在线浏览' target='_blank'>"+list[i].name+"&nbsp["+date+"]</a></li>");break;
				}
				
			}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"水产简报数据传输失败！！抱歉");break;
             }
			 
		   }
});
}
var fastPicPath_r = []; 
var fastNidPath_r = [];
var fastTextPath_r = [];
function getFood(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=2111",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$(".imgR").css("background-image","url(image/temp/"+list[0].pic);
			$("#fishRelaxA").attr('href','detail_fastInfo.html?nid='+list[0].nid).attr('target','blank').attr('title',list[0].title);
			for(var i in list){
				fastPicPath_r[i] = list[i].pic;
				fastNidPath_r[i] = list[i].nid;
				fastTextPath_r[i] = list[i].title;
				var title = list[i].title;
				if(title.length>12)
					title = title.substr(0,12)+"...";
				$("#food").append("<a href='detail_fastInfo.html?nid="+list[i].nid+"' target='blank' title='"+list[i].title+"'>"+title+"</a>");

				}
				
			},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"美食保健数据传输失败！！抱歉");break;
             }
		   }
});
}
function getWaterLab(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=2112",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			for(var i in list){
				var title = list[i].title;
				if(title.length>12)
					title = title.substr(0,12)+"...";
				$("#waterLab").append("<a href='detail_fastInfo.html?nid="+list[i].nid+"' target='blank' title='"+list[i].title+"'>"+title+"</a>");
				
				}
				},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"水族馆数据传输失败！！抱歉");break;
             }
		   }
});
}
function getLookFish(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=2113",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			for(var i in list){
				var title = list[i].title;
				if(title.length>12)
					title = title.substr(0,12)+"...";
				$("#lookFish").append("<a href='detail_fastInfo.html?nid="+list[i].nid+"' target='blank' title='"+list[i].title+"'>"+title+"</a>");

				}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"观赏鱼数据传输失败！！抱歉");break;
             }
		   }
});
}
function getRelaxFish(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=2114",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			for(var i in list){
				var title = list[i].title;
				if(title.length>12)
					title = title.substr(0,12)+"...";
				$("#relaxFish").append("<a href='detail_fastInfo.html?nid="+list[i].nid+"'target='blank' title='"+list[i].title+"'>"+title+"</a>");

				}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"休闲垂钓数据传输失败！！抱歉");break;
             }
		   }
});
}
function getFunny(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=5&dic=2115",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			for(var i in list){
				var title = list[i].title;
				if(title.length>12)
					title = title.substr(0,12)+"...";
				$("#funny").append("<a href='detail_fastInfo.html?nid="+list[i].nid+"' target='blank' title='"+list[i].title+"'>"+title+"</a>");

				}
			
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getRuiBao(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2011",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2011").attr('title',list[0].title);
			$("#2011").attr('src',"image/temp/"+list[0].pic);
			
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
				
			$("#t2011").text(title);
			$("#t2011").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2011").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getQiHao(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2012",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2012").attr('title',list[0].title);
			$("#2012").attr('src',"image/temp/"+list[0].pic);
			
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2012").text(title);
			$("#t2012").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2012").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}

function getHangShi(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2014",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2014").attr('title',list[0].title);
			$("#2014").attr('src',"image/temp/"+list[0].pic);
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2014").text(title);
			$("#t2014").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2014").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getKuaiHuoLin(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2015",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2015").attr('title',list[0].title);
			$("#2015").attr('src',"image/temp/"+list[0].pic);
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2015").text(title);
			$("#t2015").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2015").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getJingYe(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2016",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2016").attr('title',list[0].title);
			$("#2016").attr('src',"image/temp/"+list[0].pic);
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2016").text(title);
			$("#t2016").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2016").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getXinFanQie(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2017",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2017").attr('title',list[0].title);
			$("#2017").attr('src',"image/temp/"+list[0].pic);
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2017").text(title);
			$("#t2017").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2017").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function getShaYuan(){
	$.ajax({
		 type:"get",
		 url:"/fishskills/news?method=QueryNews&pc=1&ps=1&dic=2013",                                  
		 dataType : "json",
		 success : function(data, textStatus){
			var list = data.list;
			$("#2013").attr('title',list[0].title);
			$("#2013").attr('src',"image/temp/"+list[0].pic);
			var title = list[0].title;
				if(title.length>16)
					title = title.substr(0,16)+"...";
			$("#t2013").text(title);
			$("#t2013").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
			$("#h2013").attr("href","detail_fastInfo.html?nid="+list[0].nid).attr('target','blank');
		 	},
		 error : function(xhr, status, errMsg) {
             switch (status) {
                case 404:alert(status+":未找到服务器");break;
                case 500:alert(status+":服务错发生内部错误");break; 
                case 400:alert(status+":前端客户端请求有语法错误");break;
                case 405:alert(status+":前端客户端请求方法类型非法");break;
                default:alert(status+"奇闻逸事数据传输失败！！抱歉");break;
             }
		   }
});
}
function startAg(){
    //angular.bootstrap(document.getElementById("illApp"),['illApp']);
    //angular.bootstrap(document.getElementById("techloApp"),['techloApp']);
    //angular.bootstrap(document.getElementById("needApp"),['needApp']);
    //angular.bootstrap(document.getElementById("moneyApp"),['moneyApp']);
    //angular.bootstrap(document.getElementById("saiedApp"),['saiedApp']);
    //angular.bootstrap(document.getElementById("downloadApp"),['downloadApp']);
    //angular.bootstrap(document.getElementById("fishRelaxApp"),['fishRelaxApp']);
    startMoney();
    startPic();
    startSaied();
    startPicR();
    getFastInfo();
    getMoneyInfo();
    getSaiedInfo();
    getIllInfo_0();
    getTechInfo0();
    getNeedInfo(1);
    getFishHarvest();
	getFood();
	getWaterLab();
	getLookFish();
	getRelaxFish();
	getFunny();
	startHappyFishAnimate();
	getRuiBao();
	getXinFanQie();
	getJingYe();
	getKuaiHuoLin();
	getShaYuan();
	getHangShi();
	getQiHao();
}


var fastOver = 0; //抑制信图运动相关参数;
var w = 0;
var rOver = 0;
var w_r = 0;
var overHappy = 0;
$(document).ready(function(){ 

    $(".illCheck  li").mouseover(function(){     //病、科模块交替变li css
        $(".illCheck li ").css({"background":"#fff","color":"#969696"});
        $(this).css({"background":"#19c1e4","color":"#fff"});
    });
     $(".techlo  li").mouseover(function(){
        $(".techlo li ").css({"background":"#fff","color":"#969696"});
        $(this).css({"background":"#19c1e4","color":"#fff"});
    });
    
    $(".img").mouseover(function(){  //抑制信图运动
        fastOver = 1;
    })
    $(".img").mouseout(function(){
        fastOver = 0;
    })
    $(".img span").mouseover(function(){
        var i = $(this).index();
        w = i;
        $(".img").css("background-image","url(image/temp/"+fastPicPath[w]);
		$("#imgText").text("");
		$("#imgText").text(fastTextPath[w]).attr('href',"detail_fastInfo.html?nid="+fastNidPath[w]).attr('target','blank');
        $(".img span").css("opacity","0.6");
        $(".img span:eq("+w+")").css("opacity","1.0");
		
    });

    $(".imgR").mouseover(function(){  //抑制休闲运动
        rOver = 1;
    })
    $(".imgR").mouseout(function(){
        rOver = 0;
    })
    $(".imgR span").mouseover(function(){
        var i = $(this).index();
        w_r = i;
		$(".imgR").css("background-image","url(image/temp/"+fastPicPath_r[w_r]);
		$("#fishRelaxA").attr('href',"detail_fastInfo.html?nid="+fastNidPath_r[w_r]).attr('target','blank').attr('title',fastTextPath_r[w_r]);
        $(".imgR span").css("opacity","0.6");
        $(".imgR span:eq("+w_r+")").css("opacity","1.0");
    });

    $(".money").mouseover(function(){  
        moneyOver = 1;
    });
    $(".money").mouseout(function(){
        moneyOver = 0;
    });
    $(".scroll").mouseover(function(){  
        saiedOver = 1;
    });
    $(".scroll").mouseout(function(){
        saiedOver = 0;
    });
    $(".imgSet .happyDiv ").mouseover(function(){  
        overHappy = 1;
    });
    $(".imgSet .happyDiv ").mouseout(function(){
    	 overHappy = 0;
    });

});



var saiedOver = 0;
function startSaied(){ //通知公告
    var l = -40;
    setInterval(function(){
       if(saiedOver!=1){
        $(".scroll").animate({"top":l});
        l -= 40;
        if(l<=-160)
            {
                l = 0;
                $(".scroll").animate({"top":l},0);
                $(".scroll").fadeIn();
                l = -40;
            }
       }
       
    },2000);

}

var moneyOver = 0;//水产行情表运动参数
function startMoney(){ //水产行情表动画开始
    var l = -40;
    setInterval(function(){
       if(moneyOver!=1){
        $(".money").animate({"top":l});
        l -= 40;
        if(l<=-600)
            {
                l = 0;
                $(".money").animate({"top":l},0);
                $(".money").fadeIn();
                l = -40;
                
            }
       }
    },2000);

}
function  startPic(){ //信息快讯动画开始

    setInterval(function(){
		
        if(fastOver!=1)
        {
        w++;	
        if(w>3){
            w = 0;
		}
        var picPath = fastPicPath[w];
        setTimeout(function(){$(".img").hide();},2000);
        setTimeout(function(){$(".img").fadeIn(2000);
        $(".img").css("background-image","url(image/temp/"+picPath);
		$("#imgText").text("").attr('href','').attr('target','');
		$("#imgText").text(fastTextPath[w]).attr('href',"detail_fastInfo.html?nid="+fastNidPath[w]).attr('target','blank');
        $(".img span").css("opacity","0.6");
        $(".img span:eq("+w+")").css("opacity","1.0");
    },2000);
        
        
        
        }
    },3000);
}

function  startPicR(){ //休闲动画开始
    setInterval(function(){
        if(rOver!=1)
        {
			 w_r++;	
        if(w_r>3){
            w_r = 0;
		}
        setTimeout(function(){$(".imgR").hide();},2000);
        setTimeout(function(){$(".imgR").fadeIn(2000);
        $(".imgR").css("-webkit-background-image","url(image/temp/"+fastPicPath_r[w_r]);
        $(".imgR").css("background-image","url(image/temp/"+fastPicPath_r[w_r]);
		$("#fishRelaxA").attr('href',"detail_fastInfo.html?nid="+fastNidPath_r[w_r]).attr('target','blank').attr('title',fastTextPath_r[w_r]);
        $(".imgR span").css("opacity","0.6");
        $(".imgR span:eq("+w_r+")").css("opacity","1.0");
    },2000);
        }
    },3000);
}
function startHappyFishAnimate(){
		var t = -250;
		
			setInterval(function(){
				if(overHappy!=1){
				$(".imgSet").animate({'left':t},3000);
				if(t<=-500){
					setTimeout(function(){t += 250;$(".imgSet").animate({'left':t},3000);},3000);
					setTimeout(function(){t += 250;$(".imgSet").animate({'left':t},3000);},3000);
				}
				
				t -= 250;
				}
			},3000);
			
}
function goToCheck(){
    window.location.href="question.html";
}
function goToAnswerCheck(){
    window.location.href="answer.html";
}

function sendSelect(){
	var dic = $(":selected").val();
	var title = $("#key").val();
	window.location.href="selectNews.html?dic="+dic+title;
}