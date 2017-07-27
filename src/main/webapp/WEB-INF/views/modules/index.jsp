<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>我的渔技网</title>
<link rel="stylesheet" href="css/index.css">
<link rel="stylesheet" href="css/color.css">
</head>
<body class="coverImage" onload="startAg()">
<div class="content" >
<div class="logo">
    <div class="myIcon"><span class="login1"><span class="login2"></span></span></div>
    <h2>广东渔技网</h2>
    <h3>www.zhkugg.com</h3>
</div>
<div class="handler">
    <ul>
        <li><a href="index">网站首页</a></li>
        <li><a href="gdFish.html?pic=1111">广东渔业</a></li>
        <li><a href="#">政务公开</a></li>
        <li><a href="fastInfo_local.html" target="blank">信息快递</a></li>
        <li><a href="infoSaied.html" target="blank">通知公告</a></li>
        <li><a href="money.html" target="blank">水产行情</a></li>
        <li><a href="fishHarvest.html" target="blank">站务信息</a></li>
        <li><a href="needInfo.html" target="blank">供求信息</a></li>
        <li><a href="tech_breed.html" target="blank">科技推广</a></li>
        <li><a href="illList_report.html" target="blank">病防质检</a></li>
        <li><a href="#">渔乐天堂</a></li>
        <li><a href="#">休闲渔业</a></li>
    </ul>
</div>
<div class="find">
    <h4>本站搜索：</h4><p>关键字</p><input id="key" type="text" placeholder="键入关键词" >
    <select >
    			<option value="1611">站务平台</option>
                <option value="1311">本地快讯</option>
                <option value="1312">本省快讯</option>
                <option value="1313">国内快讯</option>
                <option value="1314">国际快讯</option>
                <option value="1400">通知公告</option>
                <option value="1811">养殖技术</option>
                <option value="1812">水产饲料</option>
                <option value="1813">捕捞与运输技术</option>
                <option value="1814">加工技术</option>
                <option value="1815">水质调控技术</option>
                <option value="1911">病害测报</option>
                <option value="1912">病害防治</option>
                <option value="1913">质量标准</option>
                <option value="1914">规范用药</option>
                <option value="2011">瑞宝钓鱼场</option>
                <option value="2012">七号钓虾场</option>
                <option value="2013">沙园钓虾场</option>
                <option value="2014">韩式钓虾场</option>
                <option value="2015">快活林钓虾场</option>
                <option value="2016">景业垂钓基地</option>
                <option value="2017">喜番茄钓虾</option>
                <option value="2111">美食保健</option>
                <option value="2112">水族馆</option>
                <option value="2113">观赏鱼</option>
                <option value="2114">休闲垂钓</option>
                <option value="2115">奇闻逸事</option>
    </select>
    <button class="btn blue" onclick="sendSelect()">搜索</button>
</div>
<div class="newsFields">
    <div class="pic">
        <div class="img pointer">
            <span style=" margin-left:60%;opacity:1">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </div>
        <a href="" id="imgText"></a>
    </div>
    <div class="fastInfo"> <!--信息快递-->
        <div class="head">
            <div class="myIcon"><span class="icon2"></span></div>
            <a href="fastInfo_local.html" title="查看更多"><h2>信息快递</h2></a>
        </div>
       
        <h4><a id="fast1"  style="color:#c51414 "></a></h4>
        <a id="fast2" style="font-size:12px;"></a>
        <table id="fastList" style="text-align:left">
            
        </table>
    </div>
   

    <div class="infoSaied">
        <div class="head">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon1"></span></div>
            <a href="infoSaied.html" title="查看更多"><h2 style="margin-top:2.5%">通知公告</h2></a>
        </div>
        
        <div class="scrollDiv">
            <div class="scroll">
                <ul  style="text-align:left">
                    
                </ul>
            </div>
        </div>
       
    </div>

    <div class="midContent">
    <div class="illCheck"><!--病防检疫-->
        <div class="head">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon7"></span></div>
            <a href="illList_report.html" style="color:#fff" title="查看更多"><h2 style="margin-top:1.1%">病防检疫</h2></a>
        </div>
       
        <ul class="pointer">
            <li class="active"onmouseover="getIllInfo_0()"style="margin-left:5.2%;">病害测报</li>
            <li onmouseover="getIllInfo_1()">病害防治</li>
            <li onmouseover="getIllInfo_2()">质量标准</li>
            <li onmouseover="getIllInfo_3()">规范用药</li>
        </ul>
        
        <table style="text-align:left">
           
        </table>
        
    </div>

    <div class="techlo"><!--科技推广-->
        <div class="head">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon10"></span></div>
            <a href="tech_breed.html" style="color:#fff" title="查看更多"><h2 style="margin-top:1.1%">科技推广</h2></a>
        </div>
        
        <ul class="pointer">
            <li class="active" onmouseover="getTechInfo0()"style="margin-left:1.3%;">养殖技术</li>
            <li onmouseover="getTechInfo1()">水产饲料</li>
            <li onmouseover="getTechInfo2()">捕捞运输技术</li>
            <li onmouseover="getTechInfo3()">加工技术</li>
            <li onmouseover="getTechInfo4()">水质调控技术</li>
        </ul>
        
        <table style="text-align:left">
           
            
        </table>
       
    </div>
    <div class="midHandler">
        <div class="linker yellowGreen">广东渔业</div>
        <ul class="pointer">
            <li><a href="gdFish.html?pic=1111">广州渔业</a></li>
            <li><a href="gdFish.html?pic=1112">潮州渔业</a></li>
            <li><a href="gdFish.html?pic=1113">汕尾渔业</a></li>
            <li><a href="gdFish.html?pic=1115">东莞渔业</a></li>
            <li><a href="gdFish.html?pic=1116">汕头渔业</a></li>
            <li><a href="gdFish.html?pic=1117">珠海渔业</a></li>
            <li><a href="gdFish.html?pic=1119">阳江渔业</a></li>
            <li><a href="gdFish.html?pic=1120">茂名渔业</a></li>
            <li><a href="gdFish.html?pic=1121">湛江渔业</a></li>
        </ul>
    </div>

    <div class="needInfo"><!--供求信息-->
            <div class="head"style="height:45px">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon8"></span></div>
            <a href="needInfo.html" title="查看更多" style="color:#fff"><h2 style="margin-top:1.3%">供求信息</h2></a>
            </div>
       
            <table >
            
            </table>
       
    </div>

    <div class="fishMarket">
            <div class="head"style="height:45px">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon8"></span></div>
            <a href="money.html"style="color:#fff" title="查看更多"><h2 style="margin-top:1.3%">水产行情</h2></a>
            </div>
            <table>
            <tr>
                <th>产品名称</th>
                <th>类别</th>
                <th>规格</th>
                <th>价格</th>
                <th>日期</th>
            </tr>
            </table>
            <div class="moneyDiv">
            <div class="money"><!--水产行情-->
               
                <table id="moneyList">
                
                </table>
              
            </div>
          
    		</div>
    </div>
    </div>
    <div class="cloud">
        <div class="cloudContent">
            <div class="head"style="height:45px">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon8"></span></div>
            <h2 style="margin-top:1.3%">天气预报</h2>
            </div>
           <img src="image/report.jpg" alt="获取天气预报失败" style="width:100%;height:70%;">
        </div>
        <div class="cloudContent" style="height:120px">
            <div class="head pointer"style="height:113px;width:50%;margin-left:0px;float:left;padding:40px 0px" onclick="goToCheck()">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon11"></span></div>
            <a href="question.html" title="查看更多"><h2 style="margin-top:1.3%">我要质询</h2></a>
            </div>
            <div class="head pointer"style="height:113px;width:49%;margin-left:2px;float:left;padding:40px 0px"onclick="goToAnswerCheck()">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon11"></span></div>
            <a href="answer.html" title="查看更多"><h2 style="margin-top:1.3%">回复查询</h2></a>
            </div>
        </div>
        <div class="fishHarvest"><!--水产简报-->
            <div class="head"style="height:45px;">
            <div class="myIcon"style="margin-top:-0.2%"><span class="icon9"></span></div>
            <a href="fishHarvest.html" title="查看更多"><h2 style="margin-top:1.3%">水产简报</h2></a>
            </div>
           
            <ul>
               
            </ul> 
           
        </div>
        
    </div>
        <div class="fishHappy">
            <div class="title yellowGreen">&#9830渔乐天堂&#9830</div>
            <div style="overflow:hidden;margin-left:5%;width:95%;height:100%">
            <div class="imgSet">
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2011" href="#"title=""><img id="2011" src="" alt="图片加载失败"></a></div><a href="#" id="t2011"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2012" href="#"title=""><img id="2012" src="" alt="图片加载失败"></a></div><a href="#" id="t2012"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2013" href="#"title=""><img id="2013" src="" alt="图片加载失败"></a></div><a href="#" id="t2013"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2014" href="#" title=""><img id="2014" src="" alt="图片加载失败"></a></div><a href="#" id="t2014"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2015" href="#" title=""><img id="2015" src="" alt="图片加载失败"></a></div><a href="#" id="t2015"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2016" href="#" title=""><img id="2016" src="" alt="图片加载失败"></a></div><a href="#" id="t2016"></a></div>
                <div class="happyDiv"><div class="happyImgDiv"><a id="h2017" href="#" title=""><img id="2017" src="" alt="图片加载失败"></a></div><a href="#" id="t2017"></a></div>
            </div>
            </div>
            
        </div>
        <div class="fishRelax">
            <div class="head"style="height:45px">
            <div class="myIcon"style="margin-top:-0.1%"><span class="icon5"></span></div>
            <h2 style="margin-top:0.3%">休闲渔业</h2>
            </div>
            <div class="fishRelaxContent">
                <a href="" id="fishRelaxA">
                <div class="imgDiv">
                    <div class="imgR pointer">
                        <span style=" margin-left:60%;opacity:1">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
           		</a>
                <div class="fishRelaxText" id="food" style="text-align:left;padding:0px 0px 0px 20px ">
                    <a href="#" class="nowBtn orange" >美食保健</a>
                    
                </div>
                <div class="fishRelaxText" id="waterLab" style="text-align:left;padding:0px 0px 0px 20px">
                     <a href="#" class="nowBtn orange">水族馆</a>
                    
                </div>
                <div class="fishRelaxText" id="lookFish" style="text-align:left;padding:0px 0px 0px 20px">
                     <a href="#" class="nowBtn orange">观赏鱼</a>
                     
                </div>
                <div class="fishRelaxText" id="relaxFish" style="text-align:left;padding:0px 0px 0px 20px">
                     <a href="#" class="nowBtn orange">休闲垂钓</a>
                     
                </div>
                <div class="fishRelaxText" id="funny" style="text-align:left;padding:0px 0px 0px 20px">
                     <a href="#" class="nowBtn orange">奇闻逸事</a>
                     
                </div>
           
            </div>
        </div>
        <div class="foot"><a href="#">关于我们</a><a href="login">后台登陆</a></div>
<h5 style="color:#333;margin-top:20px;float:left;margin-left:46.5%">--版权&copy叶超团队--</h5>
</div>
</div>
</body>
<script src="https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js" ></script>
<script src="js/index.js" ></script>
<script src="js/prefixfree.min.js" ></script>
</html>