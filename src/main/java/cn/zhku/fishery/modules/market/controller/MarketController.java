package cn.zhku.fishery.modules.market.controller;

import cn.zhku.fishery.modules.market.service.MarketService;
import cn.zhku.fishery.mybatis.entity.Market;
import cn.zhku.fishery.mybatis.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 21:36.
 * @E-mail: gonefuture@qq.com
 */

@Controller
public class MarketController {
    @Autowired
    private MarketService marketService;


    @RequestMapping(value="/back/Market",params="method=insertMarket")
    @ResponseBody
    public Message insertMarket(Market market) {
        return marketService.insertMarket(market);
    }


    @RequestMapping(value="/back/Market",params="method=deleteMarke")
    @ResponseBody
    public Message deleteMarket(int marketid) {
        return marketService.deleteMarket(marketid);
    }


    @RequestMapping(value="/back/Market",params="method=updateMarket")
    @ResponseBody
    public Message updateMarket(Market market) {
        return marketService.updateMarket(market);
    }


    @RequestMapping(value="/back/Market",params="method=selectMarket")
    @ResponseBody
    public List<Market> selectMarket(String marketname) {
        return marketService.selectMarket(marketname);
    }


    @RequestMapping(value="/back/Market",params="method=showMarket")
    @ResponseBody
    public List<Market> showMarket(int pageNum,String pageSize) {
        if(pageSize == null)
            pageSize = "5";

        return marketService.showMarket(pageNum,Integer.valueOf(pageSize));
    }

    public  Market selectMarket() {
        return null;
    }
}
