
var fast = angular.module('fastApp',[]); //信息快讯模块
var fastArr =  [
    {newsName : "珠江质检中心称水资源短缺，请保护好水资源......", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];
fast.controller('fastCtrl',function($scope){
    /*$http.get({
	newsId: ''
    }).then(function successCallback(response) {
		
	}, function errorCallback(response) {
		
    });*/

    $scope.fastInfos=fastArr;
});

var saied = angular.module('saiedApp',[]); //通知公告模块
var saiedArr =  [
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];
saied.controller('saiedCtrl',function($scope){
    $scope.saiedInfos = saiedArr;
});

var ill = angular.module('illApp', []);  //病防检疫模块
var illArr0 = [
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];
var illArr1 = [
    {newsName : "省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "省第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];   
ill.controller('illCtrl', function($scope) {
    $scope.set0 = function(){
        $scope.illInfos = illArr0;
    }
    $scope.set1 = function(){
       
        $scope.illInfos = illArr1;
    }
    $scope.set2 = function(){
        $scope.illInfos = illArr0;
    }
    $scope.set3 = function(){
        $scope.illInfos = illArr1;
    }        
    $scope.illInfos = illArr0;
});



var techlo = angular.module('techloApp',[]);//科技推广模块
var techloArr0 = [
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-23"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-02-11"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习省第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];
var techloArr1 = [
    {newsName : "第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "第十四次党代会精神", newsId : "#",date:"2017-06-24"},
    {newsName : "第十四次党代会精神", newsId : "#",date:"2017-06-24"}
    ];
var techloArr2 = [
    {newsName : "精神", newsId : "#",date:"2017-02-13"},
    {newsName : "精神", newsId : "#",date:"2017-06-24"},
    {newsName : "精神", newsId : "#",date:"2017-06-24"},
    {newsName : "精神", newsId : "#",date:"2017-06-24"},
    {newsName : "精神", newsId : "#",date:"2017-06-24"}
    ];
var techloArr3 = [
    {newsName : "组织学习", newsId : "#",date:"2017-02-14"},
    {newsName : "组织学习", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习", newsId : "#",date:"2017-06-24"},
    {newsName : "组织学习", newsId : "#",date:"2017-06-24"}
    ];
   
techlo.controller('techloCtrl',function($scope){
    

        $scope.set0 = function(){
            $scope.techloInfos = techloArr0;
        }
         $scope.set1 = function(){
            $scope.techloInfos = techloArr1;
        }
         $scope.set2 = function(){
            $scope.techloInfos = techloArr2;
        }
         $scope.set3 = function(){
            $scope.techloInfos = techloArr3;
        }
         $scope.set4 = function(){
            $scope.techloInfos = techloArr0;
        }

        $scope.techloInfos = techloArr0;//设置初值;


    });

var needApp = angular.module('needApp',[]);//供求模块
var needArr = [
    {name : "组织学习省第十四次党代会精神", informationId : "#"},
    {name : "组织学习省第十四次党代会精神", informationId : "#"},
    {name : "组织学习省第十四次党代会精神", informationId : "#"},
    {name : "组织学习省第十四次党代会精神", informationId : "#"},
    {name : "组织学习省第十四次党代会精神", informationId : "#"}
    ];
needApp.controller('needCtrl',function($scope){
    $scope.needInfos = needArr;
});

var moneyApp = angular.module('moneyApp',[]);//水厂行情模块
var moneyArr = [
    {fishName : "酸菜鱼1", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"},
    {fishName : "酸菜鱼", type : "食用鱼",size:"2000",prize:"30",date:"2017-06-23"}
    ];
moneyApp.controller('moneyCtrl',function($scope){
    $scope.moneyInfos = moneyArr;
});

var download = angular.module('downloadApp',[]); //水产简报下载模块
var downloadArr =  [
    {name : "组织学习省第十四次党代会精神", nameId : "#",date:"2017-06-24"},
    {name : "组织学习省第十四次党代会精神", nameId : "#",date:"2017-06-24"},
    {name : "组织学习省第十四次党代会精神", nameId : "#",date:"2017-06-24"},
    {name : "组织学习省第十四次党代会精神", nameId : "#",date:"2017-06-24"},
    {name : "组织学习省第十四次党代会精神", nameId : "#",date:"2017-06-24"}
    ];
download.controller('downloadCtrl',function($scope){
    $scope.downloadInfos = downloadArr;
});
var fishRelax = angular.module('fishRelaxApp',[]); //休闲娱乐模块
var keepHealthArr =  [
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次党代", newsId : "#"},
    {newsName : "组织学习省第十", newsId : "#"}
    ];
var waterLabArr =  [
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次党代", newsId : "#"},
    {newsName : "组织学习省第十", newsId : "#"}
    ];
var lookFishArr =  [
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次党代", newsId : "#"},
    {newsName : "组织学习省第十", newsId : "#"}
    ];
var relaxFishArr =  [
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次党代", newsId : "#"},
    {newsName : "组织学习省第十", newsId : "#"}
    ];
var funnyArr =  [
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次", newsId : "#"},
    {newsName : "组织学习省第十四次党代", newsId : "#"},
    {newsName : "组织学习省第十", newsId : "#"}
    ];
fishRelax.controller('fishRelaxCtrl',function($scope){
    $scope.keepHealth = keepHealthArr;
    $scope.waterLab = waterLabArr;
    $scope.lookFish = lookFishArr;
    $scope.relaxFish = relaxFishArr;
    $scope.funny = funnyArr;
});

function startAg(){
    angular.bootstrap(document.getElementById("illApp"),['illApp']);
    angular.bootstrap(document.getElementById("techloApp"),['techloApp']);
    angular.bootstrap(document.getElementById("needApp"),['needApp']);
    angular.bootstrap(document.getElementById("moneyApp"),['moneyApp']);
    angular.bootstrap(document.getElementById("saiedApp"),['saiedApp']);
    angular.bootstrap(document.getElementById("downloadApp"),['downloadApp']);
    angular.bootstrap(document.getElementById("fishRelaxApp"),['fishRelaxApp']);
    startMoney();
    startPic();
    startSaied();
    startPicR();
}


var fastOver = 0; //抑制信图运动相关参数;
var p = 1;
var w = 0;
var rOver = 0;
var p_r = 1;
var w_r = 0;
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
        var s = i+1;
        w = i;
        p = s;
        $(".img").css("background-image","url(image/"+s+".jpg)");
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
        var s = i+1;
        w_r = i;
        p_r = s;
        $(".imgR").css("background-image","url(image/"+s+".jpg)");
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
});



var saiedOver = 0;
function startSaied(){ //水产行情表动画开始
    var l = -40;
    setInterval(function(){
       if(saiedOver!=1){
        $(".scroll").animate({"top":l});
        l -= 40;
        if(l<=-480)
            {
                l = 0;
                $(".scroll").css({"display":"none","top":l});
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
        if(l<=-360)
            {
                l = 0;
                $(".money").css({"display":"none","top":l});
                $(".money").fadeIn();
                l = -40;
            }
       }
    },2000);

}
function  startPic(){ //信息快讯动画开始
   
    $(".img").fadeIn();

    setInterval(function(){
        if(fastOver!=1)
        {
        setTimeout(function(){$(".img").hide();},2000);
        setTimeout(function(){$(".img").fadeIn(2000);
        $(".img").css("background-image","url(image/"+p+".jpg)");
        $(".img span").css("opacity","0.6");
        $(".img span:eq("+w+")").css("opacity","1.0");
    },2000);
        p++;
        w++;
        if(p > 4)
            p = 1;
        if(w>3)
            w = 0;
        }
    },3000);
}

function  startPicR(){ //休闲动画开始
   
    $(".imgR").fadeIn();

    setInterval(function(){
        if(rOver!=1)
        {
        setTimeout(function(){$(".imgR").hide();},2000);
        setTimeout(function(){$(".imgR").fadeIn(2000);
        $(".imgR").css("background-image","url(image/"+p_r+".jpg)");
        $(".imgR span").css("opacity","0.6");
        $(".imgR span:eq("+w_r+")").css("opacity","1.0");
    },2000);
        p_r++;
        w_r++;
        if(p_r > 4)
            p_r = 1;
        if(w_r>3)
            w_r = 0;
        }
    },3000);
}